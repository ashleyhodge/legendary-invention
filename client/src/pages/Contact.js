import { useState } from "react";


const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function handleName(e) {
    setName(e.target.value);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handleMessage(e) {
    setMessage(e.target.value);
  }

  // const submitEmail = async (e) => {
  //   e.preventDefault();
    
  //   await fetch("http://localhost:3001/send", {
  //     method: "POST",
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //     body: JSON.stringify({ name, email, message }),
  //   })
  //     .then((res) => res.json())
  //     .then(async (res) => {
  //       const resData = await res;
  //       console.log(resData);
  //       if (resData.status === "success") {
  //         alert("Message Sent");
  //       } else if (resData.status === "fail") {
  //         alert("Message failed to send");
  //       }
  //     })
  //     .then(() => {
  //       setName('');
  //       setEmail('');
  //       setMessage('')
  //     });
  // };

  return(
    <section>
      <h1 className="text-center font-bad-script font-black text-[36px] text-[#415C6B]">Let me know!</h1>
      <div className="sm:flex justify-center items-center my-[20px] border-[3px] border-[#BDCDD6] rounded p-[10px] sm:mx-28 mx-10 font-bad-script font-light">
      <div className="text-center sm:w-1/3">
        <p>
          Reach out via social media or send me a message here to let me know how I’m doing, suggest blog   topics, tell me about your favorite patterns, or ask questions!
          I’ll try to respond as quickly as possible!</p>
      </div>
      <form >
        <div className='mt-6 sm:ml-[20%]'>
            <div className='flex flex-col items-center'>
            <input 
                onChange={handleName}
                value={name}
                name="name"
                placeholder="Name"
                className="border-2 p-1 sm:m-2 mt-2 w-full rounded"
              />
              <input 
                onChange={handleEmail}
                value={email}
                placeholder="Email"
                className="border-2 p-1 sm:m-2 mt-2 w-full rounded"
              />
              <textarea 
                onChange={handleMessage}
                value={message}
                name="Message"
                placeholder="Your message"
                rows={3}
                className="border-2 p-1 sm:m-2 mt-2 w-full rounded"
              />
            </div>
            
        </div>
        <div className='sm:ml-6'>
          <button type='submit' className='bg-[#ACBA73] font-black font-bad-script sm:text-[18px] text-white mt-2 sm:ml-9 py-2 w-full sm:w-auto sm:px-[100px] rounded'>
            Send
          </button>
        </div>
      </form>
    </div>
  </section>
  )
}

export default Contact;