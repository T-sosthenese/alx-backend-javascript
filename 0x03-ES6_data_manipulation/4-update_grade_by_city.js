export default function updateStudentGradesByCity(students, city, newGrades) {
  // Create a lookup object for new grades
  const newGradesLookup = newGrades.reduce((acc, grade) => {
    acc[grade.studentId] = grade.grade;
    return acc;
  }, {});
  // Filter students by city and map to new format
  return students
    .filter((student) => student.location === city)
    .map((student) => ({
      ...student,
      grade: newGradesLookup[student.id] || 'N/A',
    }));
}
