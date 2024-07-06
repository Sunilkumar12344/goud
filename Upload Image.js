  Upload Image

    </Button>

    <Button onClick={showmessage}>

     Show Message

    </Button>

   </div>

  );

 }

 function Button({ onClick, children }) {

  return (

   <button onClick={onClick}>

    {children}

   </button>

  );

 }

  

