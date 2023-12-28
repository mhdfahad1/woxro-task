import './App.css';
import image from './fortnite-pictures-b5kfcchwazwiz3cs 1.png'
import mask from './Mask group.png'

function App() {
  return (
    <div className='main'>
      <div className=' flex justify-end p-4'>
        <div className='closebutton'>sghx</div>
      </div>
      <div className='flex justify-center'>
        <div className='texts p-6'>
          Epic Games : An American video game and software developer and publisher based in Cary, North Carolina.
        </div>



      </div>
      <div className='flex justify-center'>
        <img className='img-fluid image1 md:w-[700px] w-[300px]' src={image} alt="no image" />


      </div>
      <div className='flex justify-center'>
        <p className='text2'>Create, play, and battle with friends for free in Fortnite. Be the last player standing in Battle Royale and Zero Build, experience a concert or live event, or discover over a million creator made games, including racing, parkour, zombie survival, and more. Each Fortnite island has an individual age rating so you can find the one that's right for you and your friends. Find it all in Fortnite ... Drop In.</p>
      </div>
      <div className='flex justify-center'>
        <button className='bg-white w-[160px] h-[30px] mt-6 cursor-auto'>Visit Website</button>
      </div>
      <div className='mt-10 row images '>
        <div className='col-md-4 w-[190px] md:mt-0 mt-3'>
          <img width={'100%'} src={mask} alt="" />
          <p className='imagetext mt-2'>Explore large, destructible environments where no two games are ever the same.</p>
        </div>
        <div className='col-md-4 w-[190px] md:mt-0 mt-3'>
          <img width={'100%'} src={mask} alt="" />
          <p className='imagetext mt-2'>Team up with friends by sprinting, climbing and smashing your way to earn your Victory Royale</p>
        </div>
        <div className='col-md-4 w-[190px] md:mt-0 mt-3'>
          <img width={'100%'} src={mask} alt="" />
          <p className='imagetext mt-2'>Discover even more ways to play across thousands of creator-made game genres</p>
        </div>
      </div>

      <div className='flex justify-center md:mt-32 mt-10'>
        <div>
          <h1 className='text-center text-2xl text-white'>Our Contribution</h1>
          <p className='text2'>Our core offering extends beyond mere profit generation; we emphasize the growth and active involvement of our user community. Collaborating with us represents an investment, rather than a mere expenditure. Our dedication to providing distinctive digital interactions guarantees unparalleled benefits for our clientele.</p>
        </div>
      </div>

      <div className='mt-16 row users'>
        <div className='col-md-4 w-[170px] md:mt-0 mt-4'>
          <h1 className='text-5xl text-center text-white'>5M</h1>
          <p className='userTexts mt-4'>Daily User Engagements</p>
        </div>
        <div className='col-md-4 w-[170px] md:mt-0 mt-4'>
          <h1 className='text-5xl text-center text-white'>$500k</h1>
          <p className='userTexts mt-4'>Revenue Surge for an platform</p>
        </div>
        <div className='col-md-4 w-[170px] md:mt-0 mt-4'>
          <h1 className='text-5xl text-center text-white'>10X</h1>
          <p className='userTexts mt-4'>ROAS on all our marketing campaigns</p>
        </div>
        <div className='flex justify-center md:mt-32 mt-20'>
          <div>
            <h1 className='text-center md:text-2xl text-md text-white'>Interested in delving deeper into the project?</h1>
            <p className='md:mt-10 mt-2 projectext'>If you'd like to explore further details about our initiatives or any of our affiliated brands, don't hesitate to connect. You can reach out to us via email at <b className='sptext'>hello@abc.com</b> or give us a call at <b className='sptext'>+91 480 20802730</b>.</p>
          <div className='flex justify-center mt-7'>
            <button className='buttons cursor-auto'>Ring us on Skype</button>
            <button className='buttons1 ml-5 cursor-auto'>Contact Us</button>
          </div>
          </div>
        </div>
      </div>
      <div className='footer flex justify-center md:mt-48 mt-10'>
        <p>© 2019-2023 abcTechnology Solutions Pvt. Ltd. All Rights Reserved</p>
      </div>
    </div>
  );
}

export default App;
