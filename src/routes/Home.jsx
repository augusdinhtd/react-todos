import Header from "@/components/Header";
import TodosLogic from "@/components/TodosLogic";
import Modal from "@/components/Modal";
import Form from "@/components/Form";

const TodoApp = () => {
  return (
    <>
      {/* <Navbar />
        <Modal />
        <Form />
        */}
      {/* <div className="wrapper"> */}
      <div className="todos">
        <Header>
          <h1 style={{ textAlign: "center" }}>todos</h1>
          <p>Items will persist in the browser local storage</p>
        </Header>
        <TodosLogic />
      </div>
      {/* </div> */}
    </>
  );
};
export default TodoApp;
