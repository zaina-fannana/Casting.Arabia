import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import axios from "axios";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Form } from "antd";
import { AiOutlineClose } from "react-icons/ai";
import "./EditStepOnePage.css";
import StepTwoEdit from "../step-two/StepTwoEdit";

const EditStepOnePage = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    productionPersonnel: [],
    productionDescription: "",
  });

  const [showStepTwo, setShowStepTwo] = useState(false);

  useEffect(() => {
    if (data) {
      setFormData({
        title: data.title,
        company: data.company,
        productionPersonnel: [],
        productionDescription: data.productionDescription,
      });
    }
  }, [data]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleContinue = async () => {
    const Errors = {};

    if (!formData.title.trim()) {
      Errors.title = "This field is required";
    }

    if (!formData.company.trim()) {
      Errors.company = "This field is required";
    }

    if (!formData.productionDescription.trim()) {
      Errors.productionDescription = "This field is required";
    }

    formData.productionPersonnel.forEach((personnel, index) => {
      if (!personnel.trim()) {
        Errors[`productionPersonnel[${index}]`] = "This field is required";
      }
    });

    if (Object.keys(Errors).length > 0) {
      setErrors(Errors);
      return;
    }

    try {
      window.history.pushState(
        {},
        "",
        "creator/opportunities/1833/edit/step-two"
      );
      setShowStepTwo(true);

      await axios.get(`https://api.castingarabia.com/opportunities/1865`, {
        title: formData.title,
        company: formData.company,
        productionPersonnel: formData.productionPersonnel.join(","),
        productionDescription: formData.productionDescription,
      });

      const response = await axios.get(
        `https://api.castingarabia.com/opportunities/1865`
      );
      setData(response.data);

      const rolesResponse = await axios.get(
        `https://api.castingarabia.com/opportunities/1865/roles`
      );
      const rolesData = rolesResponse.data;

      setShowStepTwo(true);
    } catch (error) {
      const Errors = {};
      // error.inner.forEach((err) => {
      //   Errors[err.path] = err.message;
      // });
      setErrors(Errors);
      console.error("API error:", error);
    }
  };

  return (
    <div className="my-12" style={{ minHeight: "70vh", background: "#f5f5f5" }}>
      {showStepTwo ? (
        <StepTwoEdit />
      ) : (
        <div
          className="flex flex-col mx-auto gap-3"
          style={{ textAlign: "end", maxWidth: "600px", marginRight: "365px" }}
        >
          <p className="StepOne">Posting an Opportunity</p>
          <div className="Stepone">
            <div>
              <TextField
                value={formData.title}
                onChange={handleInputChange}
                name="title"
                label="Title of Production"
                variant="standard"
                placeholder="Robinhoud"
                style={{
                  width: "100%",
                  borderColor: errors.title ? "red" : "",
                }}
              />
              {errors.title && <p className="text-red-500">{errors.title}</p>}
            </div>

            <div>
              <TextField
                value={formData.company}
                onChange={handleInputChange}
                name="company"
                label="Production Company"
                variant="standard"
                placeholder="Company Name"
                style={{
                  width: "100%",
                  borderColor: errors.company ? "red" : "",
                }}
              />
              {errors.company && (
                <p className="text-red-500">{errors.company}</p>
              )}
            </div>

            <> ︎ ︎ ︎</>

            <div>
              <Form name="dynamic_form_item" style={{ maxWidth: 600 }}>
                <Form.List
                  name="names"
                  rules={[
                    {
                      validator: async (_, names) => {
                        if (!names || names.length < 1) {
                          return Promise.reject(
                            new Error(
                              "At least 1 production personnel is required"
                            )
                          );
                        }
                      },
                    },
                  ]}
                >
                  {(fields, { add, remove }, { errors }) => (
                    <>
                      {fields.map((field, index) => (
                        <Form.Item required={false} key={field.key}>
                          <div className="flex items-center">
                            <Form.Item
                              {...field}
                              validateTrigger={["onChange"]}
                              rules={[
                                {
                                  required: true,
                                  whitespace: true,
                                  message:
                                    "Please input production personnel's name or delete this field.",
                                },
                              ]}
                              noStyle
                            >
                              <TextField
                                name={`productionPersonnel[${index}]`}
                                label="Production Personnel"
                                variant="standard"
                                placeholder="Production Personnel"
                                style={{ width: "100%" }}
                                value={
                                  formData.productionPersonnel[index] || ""
                                }
                                onChange={(e) => handleInputChange(e)}
                              />
                            </Form.Item>
                            {fields.length > 0 ? (
                              <AiOutlineClose
                                className="cursor-pointer dynamic-delete-button"
                                onClick={() => remove(field.name)}
                              />
                            ) : null}
                          </div>
                        </Form.Item>
                      ))}
                      <Form.Item>
                        <Button
                          onClick={() => add()}
                          className="ant-btn ant-btn-default border-blue-600 css-dev-only-do-not-override-nnuwmp mui-rtl-dwgqy6 sm:w-[40%]"
                        >
                          <p className="flex items-center gap-2 text-blue-600 font-semibold">
                            Production Personnel
                            <PlusOutlined />
                          </p>
                        </Button>

                        <Form.ErrorList errors={errors.productionPersonnel} />
                      </Form.Item>
                    </>
                  )}
                </Form.List>
              </Form>
            </div>

            <div>
              <TextField
                value={formData.productionDescription}
                onChange={handleInputChange}
                name="productionDescription"
                minRows={7}
                label="Production Description"
                style={{ width: "100%" }}
              />
              {errors.productionDescription && (
                <p className="text-red-500">{errors.productionDescription}</p>
              )}
            </div>

            <div className="flex items-center gap-4">
              <button className="save" href={"/creator"}>
                Save For Later
              </button>

              <> ︎ ︎ ︎</>

              {formData.title &&
              formData.company &&
              formData.productionDescription !== "" &&
              isLoading ? (
                <div className="border-2 border-blue-700 bg-blue-700 rounded-md text-lg text-white px-4 py-1 font-semibold hover:bg-blue-600 duration-200"></div>
              ) : (
                <button
                  onClick={handleContinue}
                  className="border-2 border-blue-700 bg-blue-700 rounded-md text-lg text-white px-4 py-1 font-semibold hover:bg-blue-600 duration-200"
                >
                  {formData.title &&
                  formData.company &&
                  formData.productionDescription !== "" ? (
                    <div> Continue</div>
                  ) : (
                    "Continue"
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditStepOnePage;
