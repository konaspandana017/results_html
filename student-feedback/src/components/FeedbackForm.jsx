import React, { useState } from "react";
import {
  Container,
  Box,
  Grid,
  Card,
  CardContent,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Autocomplete,
  RadioGroup,
  FormControlLabel,
  Radio,
  Rating,
  Slider,
  Checkbox,
  FormGroup,
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Snackbar,
  LinearProgress,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const FeedbackForm = () => {
  const courses = ["DSA", "Operating Systems", "DBMS", "Networks"];
  const instructors = ["Dr. Mehta", "Prof. Rao", "Dr. Jain", "Prof. Das"];
  const works = ["Lectures", "Labs", "Assignments", "Projects", "Others"];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
    instructor: "",
    recommend: "",
    rating: 0,
    pace: 5,
    worked: [],
    comments: "",
    consent: false,
  });

  const [dialogOpen, setDialogOpen] = useState(false);
  const [snackOpen, setSnackOpen] = useState(false);
  const [records, setRecords] = useState([]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleWorkedToggle = (opt) => {
    const updated = formData.worked.includes(opt)
      ? formData.worked.filter((w) => w !== opt)
      : [...formData.worked, opt];
    setFormData({ ...formData, worked: updated });
  };

  const required = [
    "name",
    "email",
    "course",
    "instructor",
    "recommend",
    "rating",
    "pace",
    "comments",
    "consent",
  ];
  const filled = required.filter((f) => formData[f] && formData[f] !== "").length;
  const progress = Math.round((filled / required.length) * 100);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDialogOpen(true);
  };

  const handleConfirm = () => {
    const existing = JSON.parse(localStorage.getItem("feedback_submissions")) || [];
    const updated = [...existing, formData];
    localStorage.setItem("feedback_submissions", JSON.stringify(updated));
    setRecords(updated); // show in table immediately
    setDialogOpen(false);
    setSnackOpen(true);
    setFormData({
      name: "",
      email: "",
      course: "",
      instructor: "",
      recommend: "",
      rating: 0,
      pace: 5,
      worked: [],
      comments: "",
      consent: false,
    });
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 6 }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: 600, color: "primary.dark" }}
      >
        🎓 Student Course Feedback
      </Typography>

      <Box sx={{ mb: 3 }}>
        <LinearProgress variant="determinate" value={progress} color="primary" />
        <Typography align="right" variant="body2">
          {progress}% complete
        </Typography>
      </Box>

      <Card
        elevation={2}
        sx={{
          borderRadius: 2,
          border: "1px solid #e8d1d3",
          backgroundColor: "#fff8f8",
        }}
      >
        <CardContent>
          <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Student Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>

             <Grid item xs={12} sm={6}>  {/* make it wider */}
  <FormControl fullWidth required>
    <InputLabel>Course</InputLabel>
    <Select
      name="course"
      value={formData.course}
      onChange={handleChange}
    >
      {courses.map((c) => (
        <MenuItem key={c} value={c}>
          {c}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
</Grid>

<Grid item xs={12} sm={6}>
  <Autocomplete
    freeSolo
    options={instructors}
    value={formData.instructor}
    onChange={(e, val) => setFormData({ ...formData, instructor: val })}
    renderInput={(params) => <TextField {...params} label="Instructor" required />}
  />
</Grid>



              <Grid item xs={12}>
                <Typography>Would you recommend this course?</Typography>
                <RadioGroup
                  row
                  name="recommend"
                  value={formData.recommend}
                  onChange={handleChange}
                >
                  <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                  <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Typography>Overall Rating</Typography>
                <Rating
                  name="rating"
                  value={formData.rating}
                  onChange={(e, val) => setFormData({ ...formData, rating: val })}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <Typography>Pace of the Course</Typography>
                <Slider
                  name="pace"
                  min={0}
                  max={10}
                  value={formData.pace}
                  valueLabelDisplay="auto"
                  onChange={(e, val) => setFormData({ ...formData, pace: val })}
                />
              </Grid>

              <Grid item xs={12}>
                <Typography>What worked well?</Typography>
                <FormGroup row>
                  {works.map((opt) => (
                    <FormControlLabel
                      key={opt}
                      control={
                        <Checkbox
                          checked={formData.worked.includes(opt)}
                          onChange={() => handleWorkedToggle(opt)}
                        />
                      }
                      label={opt}
                    />
                  ))}
                </FormGroup>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Comments"
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                  fullWidth
                  required
                  multiline
                  rows={3}
                  helperText={`${formData.comments.length}/50`}
                />
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="consent"
                      checked={formData.consent}
                      onChange={handleChange}
                      required
                    />
                  }
                  label="I agree to share this feedback with the instructor"
                />
              </Grid>

              <Grid item xs={12} textAlign="center">
                <Button
                  type="submit"
                  variant="contained"
                  disabled={progress < 100}
                  sx={{ px: 5 }}
                >
                  Submit Feedback
                </Button>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>

      {/* Confirmation Dialog */}
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>Confirm Feedback</DialogTitle>
        <DialogContent dividers>
          <Typography>Name: {formData.name}</Typography>
          <Typography>Email: {formData.email}</Typography>
          <Typography>Course: {formData.course}</Typography>
          <Typography>Instructor: {formData.instructor}</Typography>
          <Typography>Recommend: {formData.recommend}</Typography>
          <Typography>Rating: {formData.rating}</Typography>
          <Typography>Pace: {formData.pace}</Typography>
          <Typography>Worked Well: {formData.worked.join(", ")}</Typography>
          <Typography>Comments: {formData.comments}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleConfirm} variant="contained" color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={snackOpen}
        autoHideDuration={2500}
        message="Feedback submitted successfully!"
        onClose={() => setSnackOpen(false)}
      />

      {/* Table Section */}
      {records.length > 0 && (
        <Paper elevation={3} sx={{ mt: 5, p: 2, borderRadius: 2 }}>
          <Typography variant="h6" gutterBottom align="center" color="primary.dark">
            Submitted Feedback Records
          </Typography>
          <Table size="small">
            <TableHead sx={{ backgroundColor: "primary.light" }}>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Course</TableCell>
                <TableCell>Instructor</TableCell>
                <TableCell>Rating</TableCell>
                <TableCell>Recommend</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {records.map((rec, i) => (
                <TableRow
                  key={i}
                  sx={{ backgroundColor: i % 2 === 0 ? "#fff" : "#fdf3f5" }}
                >
                  <TableCell>{rec.name}</TableCell>
                  <TableCell>{rec.course}</TableCell>
                  <TableCell>{rec.instructor}</TableCell>
                  <TableCell>{rec.rating}</TableCell>
                  <TableCell>{rec.recommend}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      )}
    </Container>
  );
};

export default FeedbackForm;
