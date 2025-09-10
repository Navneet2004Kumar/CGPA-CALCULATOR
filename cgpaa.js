
const gradePoints = {
  "O": 10,
  "A+": 9,
  "A": 8,
  "B+": 7,
  "B": 6,
  "C": 5,
  "F": 0
};

const subjectTable = document.querySelector("#subjectTable tbody");
const addSubjectBtn = document.getElementById("addSubject");
const calculateBtn = document.getElementById("calculateCGPA");
const cgpaValue = document.getElementById("cgpaValue");


addSubjectBtn.addEventListener("click", () => {
  const row = document.createElement("tr");

  row.innerHTML = `
    <td><input type="text" placeholder="Subject Name"></td>
    <td><input type="number" min="1" value="3"></td>
    <td>
      <select>
        <option value="O">O (10)</option>
        <option value="A+">A+ (9)</option>
        <option value="A">A (8)</option>
        <option value="B+">B+ (7)</option>
        <option value="B">B (6)</option>
        <option value="C">C (5)</option>
        <option value="F">F (0)</option>
      </select>
    </td>
    <td><button class="removeBtn">❌</button></td>
  `;

  
  row.querySelector(".removeBtn").addEventListener("click", () => {
    row.remove();
  });

  subjectTable.appendChild(row);
});


calculateBtn.addEventListener("click", () => {
  let totalCredits = 0;
  let weightedSum = 0;

  subjectTable.querySelectorAll("tr").forEach(row => {
    const credits = parseFloat(row.cells[1].querySelector("input").value) || 0;
    const grade = row.cells[2].querySelector("select").value;

    totalCredits += credits;
    weightedSum += credits * gradePoints[grade];
  });

  const cgpa = totalCredits > 0 ? (weightedSum / totalCredits).toFixed(2) : "0.00";
  cgpaValue.textContent = cgpa;
});

