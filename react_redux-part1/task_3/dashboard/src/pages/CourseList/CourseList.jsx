// CourseList.jsx
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCourses } from "./coursesSlice";

const CourseList = () => {
  const courses = useSelector((state) => state.courses.courses);
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch courses when the component mounts
    dispatch(fetchCourses());
  }, [dispatch]);

  return (
    <div>
      {/* Render the course list */}
      {courses.map((course) => (
        <div key={course.id}>{course.name}</div>
      ))}
    </div>
  );
};

export default CourseList;