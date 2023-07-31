import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";

import { ArticleType } from "../types";

interface AutocompleteFormProps {
  data: ArticleType[];
  loading: boolean;
  error: string;
  onOptionSelect: (option: ArticleType) => void;
  value: ArticleType | undefined;
  onClear: () => void;
}

const AutocompleteForm: React.FC<AutocompleteFormProps> = ({
  data,
  loading,
  error,
  onOptionSelect,
  value,
  onClear,
}) => {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState<string[]>([]);
  const [title, setTitle] = React.useState<string>();
  const optionsArray = data;

  React.useEffect(() => {
    if (loading === true) {
      return undefined;
    }
    setOptions(optionsArray.map((article) => article.title));
  }, [loading, data, optionsArray]);

  return (
    <Autocomplete
      id="asynchronous-demo"
      sx={{ width: 350 }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      getOptionLabel={(option) => option}
      options={options}
      loading={loading}
      clearOnBlur={false}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Title"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
      value={title}
      onChange={(event, value) => {
        // Find the selected article by its title
        if (value) {
          setTitle(value);
        }
        const selectedArticle = data.find((article) => article.title === value);
        if (selectedArticle) {
          onOptionSelect(selectedArticle);
        }
      }}
    />
  );
};

export default AutocompleteForm;
