import jsPDF from 'jspdf';
import 'jspdf-autotable';

export const generateTasksPdf = (tasks) => {
  const doc = new jsPDF();
  
  doc.setFontSize(18);
  doc.text('Task Report', 14, 22);
  
  const tableColumn = ['Title', 'Description', 'Deadline', 'Assigned To', 'Status'];
  const tableRows = [];

  tasks.forEach(task => {
    const taskData = [
      task.title,
      task.description || '',
      new Date(task.deadline).toLocaleDateString(),
      task.assignedTo || '',
      task.status
    ];
    tableRows.push(taskData);
  });

  doc.autoTable({
    startY: 30,
    head: [tableColumn],
    body: tableRows,
  });

  doc.save(`tasks_report_${new Date().toISOString().slice(0,10)}.pdf`);
};
