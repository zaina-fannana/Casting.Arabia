import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import "./PostingOpportunity.css";
const top100Films = [
  ,
  "Actor",
  "Singer",
  "Model",
  "Host/hostess",
  "Musician",
  "staff",
  "Writer",
  "Dancer",
  "Other",
];

const topGender = ["Male", "Female", "---"];
function PostingOpportunity({ onClose }) {
  const [selectedOption, setSelectedOption] = useState(" ");

  const [value, setValue] = useState(top100Films[0]);
  const [inputValue, setInputValue] = useState("");

  const [gender, setGender] = useState(topGender[0]);
  const [inputGender, setInputGender] = useState("");

  const handleClose = () => {
    onClose();
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const countries = [
    { code: "Andorra", label: "أندورا" },
    { code: "United Arab Emirates", label: "الإمارات العربية المتحدة" },
    { code: "Afghanistan", label: "أفغانستان" },
    { code: "Antigua and Barbuda", label: "أنتيغوا وبربودا" },
    { code: "Anguilla", label: "أنغويلا" },
    { code: "Albani", label: "ألبانيا" },
    { code: "Armenia", label: "أرمينيا" },
    { code: "Angola", label: "أنغولا" },
    { code: "Antarctica", label: "القارة المتجمدة الجنوبية" },
    { code: "Argentina", label: "الأرجنتين" },
    { code: "American Samoa", label: "ساموا الأمريكية" },
    { code: "Australia", label: "النمسا" },
    { code: "Austria", label: "أستراليا" },
    { code: "Aruba", label: "أروبا" },
    { code: "Alland Islands", label: "جزر آلاند" },
    { code: "Austria", label: "النمسا" },
    { code: "Azerbaijan", label: "أذربيجان" },
    { code: "Bosnia and Herzegovina", label: "البوسنة والهرسك" },
    { code: "Barbados", label: "بربادوس" },
    { code: "Bangladesh", label: "بنجلاديش" },
    { code: "Belgium", label: "بلجيكا" },
    { code: "Burkina Faso", label: "بوركينا فاسو" },
    { code: "Bulgaria", label: "بلغاريا" },
    { code: "Bahrain", label: "البحرين" },
    { code: "Burundi", label: "بوروندي" },
    { code: "Benin", label: "بنين" },
    { code: "Saint Barthelemy", label: "سان بارتيليمي" },
    { code: "Bermuda", label: "برمودا" },
    { code: "Palestine", label: "فلسطين" },
  ];

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };
  return (
    <Dialog open={true} onClose={handleClose} fullWidth maxWidth="md">
      <DialogTitle
        className="JoinCasting"
        style={{
          fontFamily: "Segoe UI",
          textAlign: "end",
          marginTop: 10,
        }}
      >
        Join Casting Arabia
        <Button
          onClick={handleClose}
          sx={{
            color: "#6371e0",
          }}
        >
          X
        </Button>
      </DialogTitle>
      <DialogContent>
        <p className="OpportunityPublicationParagraph">
          <DialogContent>
            <p className="OpportunityPublicationParagraph">
              You are only a few steps away from applying to the exclusive
              opportunities on our platform! Please fill out the below form.Due
              to the large number of applications that we have received, we will
              approve a limited number of accounts during the first registration
              phase. You will be notified when it is your turn to complete your
              profile, apply for new opportunities, and take your talent to a !
              whole new level … all free of charge
            </p>
            <button
              className="QuestionOpportunity"
              tabIndex={0}
              type="button"
              aria-label="Only the Talent Seeker who has posted the opportunity that you  have applied to can see your profile."
            >
              ? Who can view my profile on Casting Arabia{" "}
              <span className="MuiTouchRipple-root mui-rtl-w0pj6f"></span>
            </button>
            <h3 className="me" style={{ fontWeight: 500 }}>
              : I am a{" "}
            </h3>
          </DialogContent>{" "}
        </p>
        <div className="OpportunityPostSection">
          <div className="ChooseAnOption">
            <label className="talent">
              <input
                type="radio"
                value="talent"
                checked={selectedOption === "talent"}
                onChange={handleOptionChange}
              />
              Talent{" "}
            </label>
            <label className="opportunityMaker">
              <input
                type="radio"
                value="opportunityMaker"
                checked={selectedOption === "opportunityMaker"}
                onChange={handleOptionChange}
              />
              Talent seeker{" "}
            </label>
          </div>

          {selectedOption === "talent" && (
            <div className="TalentSection">
              <div className="Name" style={{ marginTop: 25 }}>
                <TextField
                  label="First Name"
                  variant="outlined"
                  fullWidth
                  className="TalentInput"
                  dir="ltr"
                />
                <TextField
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                  className="TalentInput"
                  dir="ltr"
                />
              </div>

              <div className="ChooseTalent" style={{ marginTop: 25 }}>
                <Autocomplete
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                  inputValue={inputValue}
                  onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                  }}
                  id="controllable-states-demo"
                  options={top100Films}
                  renderInput={(params) => (
                    <TextField {...params} label=" Talent Type ?" dir="ltr" />
                  )}
                />
              </div>

              <div className="Gender" style={{ marginTop: 25 }}>
                <Autocomplete
                  gender={gender}
                  onChange={(event, newGender) => {
                    setGender(newGender);
                  }}
                  inputGender={inputGender}
                  onInputChange={(event, newInputGender) => {
                    setInputGender(newInputGender);
                  }}
                  id="controllable-states-demo"
                  options={topGender}
                  renderInput={(params) => (
                    <TextField {...params} label="Gender" />
                  )}
                  dir="ltr"
                />
              </div>

              <div className="email" style={{ marginTop: 25 }}>
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  className="TalentInput"
                  dir="ltr"
                />
              </div>

              <div className="SelectCountry" style={{ marginTop: 25 }}>
                <Autocomplete
                  id="country-select-demo"
                  dir="ltr"
                  options={countries}
                  autoHighlight
                  getOptionLabel={(option) => option.label}
                  renderOption={(props, option) => (
                    <Box
                      component="li"
                      sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                      {...props}
                    >
                      {option.label} {option.code}
                    </Box>
                  )}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Country"
                      dir="ltr"
                      inputProps={{
                        ...params.inputProps,
                        autoComplete: "new-password",
                      }}
                    />
                  )}
                />
              </div>

              <div className="PhoneNumber" style={{ marginTop: 25 }}>
                <TextField
                  label="Phone Number"
                  variant="outlined"
                  fullWidth
                  className="TalentInput"
                  dir="ltr"
                />
              </div>

              <FormControl sx={{ marginTop: 3 }} variant="outlined">
                <InputLabel
                  htmlFor="outlined-adornment-password"
                  className="password"
                  dir="ltr"
                >
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  dir="ltr"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        dir="ltr"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
            </div>
          )}

          {selectedOption === "opportunityMaker" && (
            <div className="TalentSection">
              <div className="TalentSection">
                <div className="Name" style={{ marginTop: 25 }}>
                  <TextField
                    label="First Name"
                    variant="outlined"
                    fullWidth
                    className="TalentInput"
                    dir="ltr"
                  />
                  <TextField
                    label="Last Name"
                    variant="outlined"
                    fullWidth
                    className="TalentInput"
                    dir="ltr"
                  />
                </div>

                <div className="CompanyName" style={{ marginTop: 25 }}>
                  <TextField
                    label="Company Name"
                    variant="outlined"
                    fullWidth
                    className="TalentInput"
                    dir="ltr"
                  />
                </div>

                <div className="ChooseTalent" style={{ marginTop: 25 }}>
                  <Autocomplete
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                    inputValue={inputValue}
                    onInputChange={(event, newInputValue) => {
                      setInputValue(newInputValue);
                    }}
                    id="controllable-states-demo"
                    options={top100Films}
                    // sx={{ width: 300 }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label=" what talent are you looking for ?"
                        dir="ltr"
                      />
                    )}
                  />
                </div>

                <div className="Gender" style={{ marginTop: 25 }}>
                  <Autocomplete
                    gender={gender}
                    dir="ltr"
                    onChange={(event, newGender) => {
                      setGender(newGender);
                    }}
                    inputGender={inputGender}
                    onInputChange={(event, newInputGender) => {
                      setInputGender(newInputGender);
                    }}
                    id="controllable-states-demo"
                    options={topGender}
                    renderInput={(params) => (
                      <TextField {...params} label="Gender" dir="ltr" />
                    )}
                  />
                </div>

                <div className="email" style={{ marginTop: 25 }}>
                  <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    className="TalentInput"
                    dir="ltr"
                  />
                </div>

                <div className="SelectCountry" style={{ marginTop: 25 }}>
                  <Autocomplete
                    id="country-select-demo"
                    dir="ltr"
                    options={countries}
                    autoHighlight
                    getOptionLabel={(option) => option.label}
                    renderOption={(props, option) => (
                      <Box
                        component="li"
                        sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                        {...props}
                      >
                        {option.label} {option.code}
                      </Box>
                    )}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Country"
                        dir="ltr"
                        inputProps={{
                          ...params.inputProps,
                          autoComplete: "new-password",
                        }}
                      />
                    )}
                  />
                </div>

                <div className="PhoneNumber" style={{ marginTop: 25 }}>
                  <TextField
                    label="Phone Number"
                    variant="outlined"
                    fullWidth
                    className="TalentInput"
                    dir="ltr"
                  />
                </div>

                <FormControl sx={{ marginTop: 3 }} variant="outlined">
                  <InputLabel
                    htmlFor="outlined-adornment-password"
                    className="password"
                    dir="ltr"
                  >
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    dir="ltr"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                          dir="ltr"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
              </div>
            </div>
          )}
        </div>
        <p className="text-lg">
          Your login means that you agree to{" "}
          <span
            className="cursor-pointer font-[400] text-[#0000EE] underline"
            style={{ color: "#0000EE", textDecoration: "underline" }}
          >
            Terms Of Service{" "}
          </span>{" "}
          and{" "}
          <span
            className="cursor-pointer font-[400] text-[#0000EE] underline"
            style={{ color: "#0000EE", textDecoration: "underline" }}
          >
            Privacy Policy{" "}
          </span>
        </p>
        {/* Submit button */}
        <Box mt={2}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{
              my: 2,
              width: "100%",
              color: "white",
              backgroundColor: "#6371e0",
              fontSize: 19,
              fontWeight: 500,
              textTransform: "unset",
              ":hover": {
                backgroundColor: "rgb(69, 79, 156)",
                fontFamily: "Segoe UI",
              },
            }}
            onClick={handleDialogOpen}
          >
            Join Casting Arabia{" "}
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

export default PostingOpportunity;
