import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import axios from "axios";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Form } from "antd";
import { AiOutlineClose } from "react-icons/ai";
import "./EditStepOnePage.css";

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

  const handle = (e, index) => {
    const { value } = e.target;
    const updatedProductionPersonnel = [...formData.productionPersonnel];
    updatedProductionPersonnel[index] = value;
    setFormData({
      ...formData,
      productionPersonnel: updatedProductionPersonnel,
    });
    setErrors({ ...errors, productionPersonnel: "" });
  };

  const handleSubmit = async (event) => {
    const token = localStorage.getItem("token");
    event.preventDefault();
    try {
      const res = await axios.put(
        `http://casting-ec2-1307338951.us-east-2.elb.amazonaws.com:7001/opportunities/`,
        {
          title: formData.title,
          company: formData.company,
          productionPersonnel: formData.productionPersonnel.join(","),
          productionDescription: formData.productionDescription,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res) {
        setIsLoading(true);
      }
    } catch (error) {
      const Errors = {};
      error.inner.forEach((err) => {
        Errors[err.path] = err.message;
      });
      setErrors(Errors);
    }
  };

  const hasErrors = () => {
    return Object.values(errors).some((error) => error);
  };

  return (
    <div className="my-12" style={{ minHeight: "70vh", background: "#f5f5f5" }}>
      <p className="StepOne">Posting an Opportunity</p>
      <div
        className="flex flex-col mx-auto gap-3"
        style={{
          textAlign: "end",
          maxWidth: "600px",
        }}
      >
        <div>
          <TextField
            value={formData.title}
            onChange={handleInputChange}
            name="title"
            label="Title of Production"
            variant="standard"
            placeholder="Robinhoud"
            style={{ width: "100%" }}
          />
          <p className="text-sm text-red-500 p-2 inline-block">
            {errors.title && errors.title}
          </p>
        </div>

        <div>
          <TextField
            value={formData.company}
            onChange={handleInputChange}
            name="company"
            label="Production Company"
            variant="standard"
            placeholder="Company Name"
            style={{ width: "100%" }}
          />
          <p className="text-sm text-red-500 p-2 inline-block">
            {errors.company && errors.company}
          </p>
        </div>

        <div>
          <Form name="dynamic_form_item" style={{ maxWidth: 600 }}>
            <Form.List
              name="names"
              rules={[
                {
                  validator: async (_, names) => {
                    if (!names || names.length < 1) {
                      return Promise.reject(
                        new Error("At least 1 passenger is required")
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
                                "Please input passenger's name or delete this field.",
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
                            value={formData.productionPersonnel[index] || ""}
                            onChange={(e) => handle(e, index)}
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
                        Production Personal
                        <PlusOutlined />
                      </p>
                    </Button>

                    <Form.ErrorList errors={errors} />
                  </Form.Item>
                </>
              )}
            </Form.List>
          </Form>
          <p className="text-sm text-red-500 p-2 inline-block">
            {errors.productionPersonnel && errors.productionPersonnel}
          </p>
        </div>

        <div>
          <TextField
            value={formData.productionDescription}
            onChange={handleInputChange}
            name="productionDescription"
            minRows={7}
            label="Production Company"
            style={{ width: "100%" }}
          />
          <p className="text-sm text-red-500 p-2 inline-block">
            {errors.productionDescription && errors.productionDescription}
          </p>
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
              onClick={handleSubmit}
              className="border-2 border-blue-700 bg-blue-700 rounded-md text-lg text-white px-4 py-1 font-semibold hover:bg-blue-600 duration-200"
            >
              {formData.title &&
              formData.company &&
              formData.productionDescription !== "" ? (
                <div> </div>
              ) : (
                "Continue"
              )}
            </button>
          )}
          <p className="text-sm text-red-500 p-2 inline-block">
            {hasErrors() && "This field is required."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EditStepOnePage;
