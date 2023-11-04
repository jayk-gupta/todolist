function Header({ tasks }) {
  const numTasks = tasks.length;
  const cmpltedTasks = tasks.filter((task) => task.status).length;
  const percentage = Math.round(cmpltedTasks / numTasks);

  const currentDate = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = currentDate.toLocaleDateString("en-US", options);
  return (
    <div className="py-6">
      {formattedDate}
      <div>
        {cmpltedTasks} tasks completed out of {numTasks}
      </div>
    </div>
  );
}
export default Header