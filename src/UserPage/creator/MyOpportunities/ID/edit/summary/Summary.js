import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Summary.css";
import {
  Box,
  Typography,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Input,
  Grid,
} from "@mui/material";

const Summary = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(
    () => {
      const fetchData = async () => {
        try {
          const token = localStorage.getItem("token");
          // if (router.query.id) {
          //   const res = await axios.get(
          //     `http://casting-ec2-1307338951.us-east-2.elb.amazonaws.com:7001/opportunities/${router.query.id}`,
          //     {
          //       headers: {
          //         Authorization: `Bearer ${token}`,
          //       },
          //     }
          //   );
          //   if (res.data) {
          //     setData(res.data);
          //   }
          // }
        } catch (error) {
          // Handle errors here
          console.error(error);
        }
      };

      fetchData();
    }
    //  [router.query.id]
  );

  const handlePublish = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      if ("") {
        const res = await axios.put(
          `http://casting-ec2-1307338951.us-east-2.elb.amazonaws.com:7001/opportunities/$`,
          {
            title: data?.title,
            company: data?.company,
            productionPersonnel: data?.productionPersonnel,
            productionDescription: data?.productionDescription,
            expirationDate: data?.expirationDate,
            status: data.status,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (res.data) {
          setIsLoading(true);
          // router.push(`/creator`);
        }
      }
    } catch (error) {
      setError(error.response.data.roles);
      console.error(error.response.data.roles);
    }
  };

  return (
    <div className="sm:w-[500px] mx-auto mt-20">
      <p className="StepOne">Posting an Opportunity</p>
      {/* <Typography
        title="Production company"
        classNameOfTitle="text-2xl mb-3"
        subTitle={data?.title}
        classNameOfSubTitle="ml-3 mb-2 text-lg"
      /> */}
      <div className="sm:" style={{ marginTop: "-44px" }}>
        <Box className="MuiBox-root mui-1hnm6b6">
          <Typography
            variant="h4"
            className="MuiTypography-root MuiTypography-h4 mui-1wvuldu"
          >
            Production company
          </Typography>
          <div className="tags_container">
            <div className="tag">
              <Input placeholder="Title of Production" disabled value="asdfd" />
            </div>
          </div>
        </Box>

        <Box className="MuiBox-root mui-h5fkc8">
          <Typography
            variant="h4"
            className="MuiTypography-root MuiTypography-h4 mui-1wvuldu"
          >
            Production company
          </Typography>
          <div className="tags_container">
            <div className="tag">
              <Input placeholder="Company name" disabled value="adsd" />
            </div>
          </div>
        </Box>

        <Box className="MuiBox-root mui-az04tu">
          <div className="tags_container">
            <Typography
              variant="h4"
              className="MuiTypography-root MuiTypography-h4 mui-1wvuldu"
            >
              Production Personnel
            </Typography>
            <div className="tag">
              <Input
                placeholder="Production Personnel"
                disabled
                value="sdfss"
              />
            </div>
          </div>
        </Box>

        <Box className="MuiBox-root mui-h5fkc8">
          <Typography
            variant="h4"
            className="MuiTypography-root MuiTypography-h4 mui-1wvuldu"
          >
            Production Description
          </Typography>
          <div className="tags_container">
            <div className="tag">
              <Input
                placeholder="Production Description"
                multiple
                disabled
                value="asdasd"
              />
            </div>
          </div>
        </Box>

        <Box className="MuiBox-root mui-1hnm6b6">
          <Typography
            variant="body1"
            className="MuiTypography-root MuiTypography-body1 mui-1wvuldu"
          >
            Role(s) You're Casting
          </Typography>
          <Box className="MuiBox-root mui-1yuhvjn">
            <Paper
              variant="outlined"
              className="MuiPaper-root MuiPaper-outlined MuiPaper-rounded MuiTableContainer-root mui-ycn9ut"
            >
              <Table className="MuiTable-root mui-16z4ktv">
                <TableHead className="MuiTableHead-root mui-1wbz3t9">
                  <TableRow className="MuiTableRow-root MuiTableRow-head mui-qfypx2">
                    <TableCell
                      className="MuiTableCell-root MuiTableCell-head MuiTableCell-sizeMedium mui-vyyw5x"
                      scope="col"
                    >
                      Role Name
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody className="MuiTableBody-root mui-1xnox0e">
                  <TableRow className="MuiTableRow-root mui-9jehzt">
                    <TableCell className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium mui-1p7duky"></TableCell>
                  </TableRow>
                  <TableRow className="MuiTableRow-root mui-9jehzt">
                    <TableCell className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium mui-1p7duky"></TableCell>
                  </TableRow>
                  <TableRow className="MuiTableRow-root mui-9jehzt">
                    <TableCell className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium mui-1p7duky"></TableCell>
                  </TableRow>
                  <TableRow className="MuiTableRow-root mui-9jehzt">
                    <TableCell className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium mui-1p7duky"></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Paper>
          </Box>
        </Box>

        <Box className="MuiBox-root mui-1hnm6b6">
          <Typography
            variant="body1"
            className="MuiTypography-root MuiTypography-body1 mui-1wvuldu"
            style={{ marginRight: "282px" }}
          >
            Filming Location
          </Typography>
          <Grid
            container
            spacing={2}
            className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 mui-tv7o6q"
          >
            {/* Add your content inside the Grid container */}
          </Grid>
        </Box>

        <Box className="MuiBox-root mui-h5fkc8">
          <Typography
            variant="h4"
            className="MuiTypography-root MuiTypography-h4 mui-1wvuldu"
            style={{ marginRight: "100px" }}
          >
            ? When should this listing expire
          </Typography>
          <div className="tags_container">
            <div className="tag">
              <Input
                placeholder="When should this listing expire?"
                multiple
                disabled
                value="24 September 2023"
              />
            </div>
          </div>
        </Box>
        <div className="flex gap-5 mb-10">
          <button className="save" href={"/creator"}>
            Save For Later
          </button>
          <> ︎ ︎ ︎</>
          {isLoading ? (
            <div className="text-xl text-white border-2 bg-blue-600 border-blue-600 rounded-lg px-3 py-1 duration-200 hover:bg-blue-700 font-semibold">
              {/* <Loading buttonContent="Publish" /> */}
            </div>
          ) : (
            <button
              onClick={handlePublish}
              variant="contained"
              color="primary"
              className="continuo"
            >
              Publish
            </button>
          )}
        </div>
        {error ? <p className="text-xl text-red-500 mb-5">{error}</p> : ""}
      </div>
    </div>
  );
};

export default Summary;
