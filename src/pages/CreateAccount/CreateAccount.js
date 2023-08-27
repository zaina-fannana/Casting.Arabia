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

const top100Films = [
  ,
  "ممثل",
  "مغنى",
  "عارض/عارضة أزياء",
  "مقدم /مقدمة برامج",
  "موسيقى",
  "طاقم التصوير",
  "كاتب",
  "راقص",
  "غيره",
];

const topGender = ["ذكر", "أنثي", "---"];
function CreateAccount({ onClose }) {
  const [selectedOption, setSelectedOption] = useState("");

  const [value, setValue] = useState(top100Films[0]);
  const [inputValue, setInputValue] = useState("");

  const [gender, setGender] = useState(topGender[0]);
  const [inputGender, setInputGender] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClose = () => {
    onClose();
  };

  const handleCreateAccount = () => {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    handleClose();
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
    <Dialog
      open={true}
      onClose={handleClose}
      fullWidth
      maxWidth="md"
      style={{ fontFamily: "Sego UI" }}
    >
      <DialogTitle
        className="JoinCasting"
        style={{
          fontFamily: "Segoe UI",
          textAlign: "end",
          marginTop: 10,
        }}
      >
        انضم إلى كاستينج أريبيا
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
              خطوات قليلة بينك وبين التقديم على فرصتك وفرص أخرى حصرية على
              منصتنا! يرجى تعبئة طلب التسجيل أدناه. نظراً للعدد الكبير من
              الطلبات المرسلة، سيتم قبول عدد محدود منها في المرحلة الأولى لإكمال
              الملف الشخصي. وسيتم إعلامكم عندما نصل إلى طلبكم لتقوموا بإنشاء
              ملفّكم الشخصي الخصوصي على المنصة لتُفتح لكم آفاق وفرص جديدة
              مجاناً!
            </p>
            <button
              className="QuestionOpportunity"
              tabIndex={0}
              type="button"
              aria-label="صانعوا الفرص التي قمت بتقديم طلبك لهم هم الوحيدون الذين يمكنهم الاطلاع على ملفك الشخصي"
            >
              من يمكنه الاطلاع على ملّفي الشخصي على كاستينج أريبيا؟{" "}
              <span className="MuiTouchRipple-root mui-rtl-w0pj6f"></span>
            </button>
            <h3 className="me">:أنا</h3>
          </DialogContent>{" "}
        </p>
        <div className="OpportunityPostSection">
          <div className="ChooseAnOption">
            <label className="opportunityMaker">
              <input
                type="radio"
                value="talent"
                checked={selectedOption === "talent"}
                onChange={handleOptionChange}
              />
              صانع فرصة
            </label>
            <label className="talent">
              <input
                type="radio"
                value="opportunityMaker"
                checked={selectedOption === "opportunityMaker"}
                onChange={handleOptionChange}
              />
              موهبة
            </label>
          </div>
          {selectedOption === "talent" && (
            <div className="TalentSection">
              <div
                className="Name"
                style={{ marginTop: 25, fontFamily: "Segoe UI" }}
              >
                <TextField
                  label="الاسم الاخير"
                  fullWidth
                  className="TalentInput"
                />
                <> ︎ ︎ ︎ ︎ ︎ ︎</>

                <TextField
                  label="الاسم الاول"
                  fullWidth
                  className="TalentInput"
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
                  sx={{ width: 300 }}
                  renderInput={(params) => (
                    <TextField {...params} label="نوع الموهبة" />
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
                  sx={{ width: 300 }}
                  renderInput={(params) => (
                    <TextField {...params} label="الجنس" />
                  )}
                />
              </div>

              <div className="email" style={{ marginTop: 25 }}>
                <TextField
                  label="البريد الالكتروني"
                  // variant="outlined"
                  fullWidth
                  className="TalentInput"
                />
              </div>

              <div className="SelectCountry" style={{ marginTop: 25 }}>
                <Autocomplete
                  id="country-select-demo"
                  sx={{ width: 300 }}
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
                      label="الدولة"
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
                  label="رقم الهاتف"
                  // variant="outlined"
                  fullWidth
                  className="TalentInput"
                />
              </div>

              <FormControl
                sx={{ marginTop: 3 }}
                // variant="outlined"
              >
                <InputLabel htmlFor="outlined-adornment-password">
                  كلمة المرور
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
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
              <div className="Name" style={{ marginTop: 25 }}>
                <TextField
                  label="الاسم الاخير"
                  // variant="outlined"
                  fullWidth
                  className="TalentInput"
                />
                <> ︎ ︎ ︎ ︎ ︎ ︎</>

                <TextField
                  label="الاسم الاول"
                  // variant="outlined"
                  fullWidth
                  className="TalentInput"
                />
              </div>

              <div className="CompanyName" style={{ marginTop: 25 }}>
                <TextField
                  label="اسم الشركة"
                  // variant="outlined"
                  fullWidth
                  className="TalentInput"
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
                  sx={{ width: 300 }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="ما هي الموهبة التي تبحث عنها؟"
                    />
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
                  sx={{ width: 300 }}
                  renderInput={(params) => (
                    <TextField {...params} label="الجنس" />
                  )}
                />
              </div>

              <div className="email" style={{ marginTop: 25 }}>
                <TextField
                  label="البريد الالكتروني"
                  // variant="outlined"
                  fullWidth
                  className="TalentInput"
                />
              </div>

              <div className="SelectCountry" style={{ marginTop: 25 }}>
                <Autocomplete
                  id="country-select-demo"
                  sx={{ width: 300 }}
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
                      label="الدولة"
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
                  label="رقم الهاتف"
                  // variant="outlined"
                  fullWidth
                  className="TalentInput"
                />
              </div>

              <FormControl
                sx={{ marginTop: 3 }}
                // variant="outlined"
              >
                <InputLabel htmlFor="outlined-adornment-password">
                  كلمة المرور
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
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
        </div>
        <p className="text-lg">
          تسجيل دخولك يعني انك موافق{" "}
          <span className="cursor-pointer font-[400] text-[#0000EE] underline">
            شروط الخدمة
          </span>{" "}
          و{" "}
          <span className="cursor-pointer font-[400] text-[#0000EE] underline">
            سياسة الخصوصية
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
            onClick={handleCreateAccount}
          >
            انضم إلى كاستينج أريبيا{" "}
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

export default CreateAccount;
