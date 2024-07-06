export default function BtnEvents() {

  return (

   <Toolbar

    onPlayMovie={() => alert('Playing Movie!')}

    onUploadImage={() => alert('Uploading Image!')}

    showmessage={()=> alert('Showing Message')}

   />

  );

 }

 function Toolbar({ onPlayMovie, onUploadImage, showmessage }) {

  return (

   <div>

    <Button onClick={onPlayMovie}>

     Play Movie

    </Button>

    <Button onClick={onUploadImage}>
        Upload Image
    </Button>
    </div>
  );
}

