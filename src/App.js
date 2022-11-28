
import './App.css';

function App() {


  const comments = [
    {
      id: 1,
      text: "First Comment"
    },
    {
      id: 2,
      text: "Second Comment"
    },
    {
      id: 3,
      text: "Third Comment"
    }
  ]

  const isLoading = false;


  return (

    <div >

      {
        isLoading &&
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment.id}</li>
          )
          )}
        </ul>

      }

      {
        comments[0].id
      }
    </div>

  );

}

export default App;