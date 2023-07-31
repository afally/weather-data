import React, { useState, useEffect } from "react";
import { ArticleType } from "../types";
import useArticle from "../hooks/useArticle";
import "./Articles.css";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import AutocompleteForm from "./AutocompleteForm";
import StartDate from "./StartDate";
import EndDate from "./EndDate";
import ArticleCard from "./ArticleCard";

export const Articles: React.FC = () => {
  const { data, loading, error } = useArticle();
  const [fromDate, setFromDate] = useState<Date | null>(null);
  const [toDate, setToDate] = useState<Date | null>(null);
  const [orderBy, setOrderBy] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<ArticleType>();
  const [selectedOptions, setSelectedOptions] = useState<Set<ArticleType>>(
    new Set()
  );

  useEffect(() => {
    if (data && data.length > 0) {
      const initialSelectedOptions = new Set(data.slice(0, 12)); // Initialize with the first 5 elements, you can adjust the number as needed
      setSelectedOptions(initialSelectedOptions);
    }
  }, [data]);

  const handleOptionSelect = (option: ArticleType) => {
    setSelectedOption(option);
  };
  const handleStartDateSelect = (date: Date | null) => {
    setFromDate(date);
  };
  const handleEndDateSelect = (date: Date | null) => {
    setToDate(date);
  };
  const handleClearFilter = () => {
    setFromDate(null);
    setToDate(null);
    setOrderBy("");
    setSelectedOption(undefined);

    if (data && data.length > 0) {
      const initialSelectedOptions = new Set(data.slice(0, 12)); // Initialize with the first 5 elements, you can adjust the number as needed
      setSelectedOptions(initialSelectedOptions);
    }
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Perform filtering based on the selected date range and other filters
    let filteredList = data;

    if (fromDate) {
      // Converted the fromDate to a Date object
      const fromDateObj = new Date(fromDate);

      filteredList = filteredList.filter(
        (item) => new Date(item.publishedAt) >= fromDateObj
      );
    }

    if (toDate) {
      // Converted the toDate to a Date object
      const toDateObj = new Date(toDate);

      filteredList = filteredList.filter(
        (item) => new Date(item.publishedAt) <= toDateObj
      );
    }

    if (selectedOption) {
      filteredList = filteredList.filter((item) =>
        item.title.toLowerCase().includes(selectedOption.title.toLowerCase())
      );
    }
    if (orderBy === "date" || "date-asc") {
      console.log("touched");
      if (orderBy === "date") {
        console.log("descend");
        filteredList.sort(
          (a, b) =>
            new Date(b.publishedAt).getTime() -
            new Date(a.publishedAt).getTime()
        );
      } else {
        console.log("Sorting in ascending order");
        console.log("ascend");
        filteredList.sort(
          (a, b) =>
            new Date(a.publishedAt).getTime() -
            new Date(b.publishedAt).getTime()
        );
      }
    }
    // Update the selected options with the filtered list
    setSelectedOptions(new Set(filteredList.slice(0, 12)));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Failed to fetch articles.</div>;
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <Grid
            container
            spacing={2}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Grid item xs={12} md={4}>
              <AutocompleteForm
                data={data}
                loading={loading}
                error={error}
                onOptionSelect={handleOptionSelect}
                value={selectedOption}
                onClear={handleClearFilter}
              />
            </Grid>

            <Grid item xs={12} md={2}>
              <FormControl fullWidth variant="outlined">
                <div>
                  <InputLabel id="order-by-label">Order By</InputLabel>
                </div>
                <Select
                  labelId="order-by-label"
                  value={orderBy}
                  onChange={(e) => setOrderBy(e.target.value as string)}
                  label="Order By"
                  id="order-by-select"
                >
                  <MenuItem value="">Select an option</MenuItem>
                  <MenuItem value="date">Date (Descending)</MenuItem>
                  <MenuItem value="date-asc">Date (Ascending)</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={2}>
              <StartDate
                value={fromDate}
                onDateSelect={handleStartDateSelect}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <EndDate value={toDate} onDateSelect={handleEndDateSelect} />
            </Grid>
            <Grid item xs={12} md={2}>
              <Box textAlign="center">
                <Button type="submit" variant="contained" color="primary">
                  Search
                </Button>
              </Box>
              <Box textAlign="center" mt={2}>
                <Button variant="contained" onClick={handleClearFilter}>
                  Clear Filter
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>

        <Grid container spacing={2} style={{ marginTop: "30px" }}>
          {Array.from(selectedOptions).map((selectedOption, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <ArticleCard
                title={selectedOption.title}
                author={selectedOption.author}
                description={selectedOption.description}
                imageUrl={selectedOption.imageUrl}
                source={selectedOption.source}
                publishedAt={selectedOption.publishedAt}
                url={selectedOption.url}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default Articles;
