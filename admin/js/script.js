
// document.addEventListener("DOMContentLoaded", () => {
//     // Simulate dynamic data fetching
//     setTimeout(() => {
//       const facultyCount = 45;
//       const ongoingTrainings = 12;
//       const completedTrainings = 30;
//       const pendingApprovals = 3;
  
//       const departmentData = {
//         cs: { faculty: 15, trainings: 5 },
//         it: { faculty: 18, trainings: 4 },
//         is: { faculty: 12, trainings: 3 },
//       };
  
//       updateStats(facultyCount, ongoingTrainings, completedTrainings, pendingApprovals);
//       createDepartmentTrainingGraph(departmentData);
//       createTrainingProgressGraph(ongoingTrainings, completedTrainings);
//     }, 1000);
//   });
  
//   function updateStats(faculty, ongoing, completed, pending) {
//     document.getElementById("faculty-count").textContent = faculty;
//     document.getElementById("ongoing-trainings").textContent = ongoing;
//     document.getElementById("completed-trainings").textContent = completed;
//     document.getElementById("pending-approvals").textContent = pending;
//   }
  
//   function createDepartmentTrainingGraph(data) {
//     const ctx = document.getElementById("departmentTrainingGraph").getContext("2d");
//     new Chart(ctx, {
//       type: "bar",
//       data: {
//         labels: ["Computer Science (CS)", "Information Technology (IT)", "Information Systems (IS)"],
//         datasets: [
//           {
//             label: "Number of Faculty",
//             data: [data.cs.faculty, data.it.faculty, data.is.faculty],
//             backgroundColor: "rgba(54, 162, 235, 0.5)",
//             borderColor: "rgba(54, 162, 235, 1)",
//             borderWidth: 1,
//           },
//           {
//             label: "Trainings Conducted",
//             data: [data.cs.trainings, data.it.trainings, data.is.trainings],
//             backgroundColor: "rgba(255, 99, 132, 0.5)",
//             borderColor: "rgba(255, 99, 132, 1)",
//             borderWidth: 1,
//           },
//         ],
//       },
//       options: {
//         responsive: true,
//         plugins: {
//           legend: {
//             position: "top",
//           },
//           title: {
//             display: true,
//             text: "Departmental Breakdown of Faculty and Trainings",
//           },
//         },
//       },
//     });
//   }
  
//   function createTrainingProgressGraph(ongoing, completed) {
//     const ctx = document.getElementById("trainingProgressGraph").getContext("2d");
//     new Chart(ctx, {
//       type: "doughnut",
//       data: {
//         labels: ["Ongoing Trainings", "Completed Trainings"],
//         datasets: [
//           {
//             label: "Training Progress",
//             data: [ongoing, completed],
//             backgroundColor: ["#36A2EB", "#FF6384"],
//             hoverOffset: 4,
//           },
//         ],
//       },
//       options: {
//         responsive: true,
//         plugins: {
//           legend: {
//             position: "top",
//           },
//           title: {
//             display: true,
//             text: "Training Progress",
//           },
//         },
//       },
//     });
//   }
  