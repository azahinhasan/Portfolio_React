import React,{Component} from 'react';
import classes from './projects.css';
import classesBtn from './button.css';
import ProjectsMac from './projectsMachins';
import ProjectDescription from './projectDescription';
import Line from './line';
import CvPart from './CVpart';
class Projects extends Component {

  state={
      filterName:'All',
      data:[
        {pName:'Laptop Shop',type:'WebApp',leng:['React.js','ASP.Net','Restful API','MsSql'],sourceCode:'https://github.com/azahinhasan/PcHardwareShop',liveView:''},
        {pName:'Anime Information',type:'MobileApp',leng:['React Native'],sourceCode:'https://github.com/azahinhasan/AnimeInfoApp_ReactNative',liveView:'https://github.com/azahinhasan/AnimeInfoApp_ReactNative/releases/tag/Beta'},
        {pName:'Weather App',type:'WebApp',leng:['ReactJS','CSS'],sourceCode:' https://github.com/azahinhasan/weatherApp_React',liveView:'https://azahinhasan.github.io/weatherApp_React/'},
        {pName:'Covid19 Tracker',type:'WebApp',leng:['ReactJS','CSS'],sourceCode:' https://github.com/azahinhasan/covid19_tracker_React.js',liveView:' https://azahinhasan.github.io/covid19_tracker_React.js/#/home'},
        {pName:'To-do List with Auth',type:'WebApp',leng:['ReactJS','Redux','Firebase','CSS'],sourceCode:' https://github.com/azahinhasan/todoListV2_React_withAuth',liveView:'https://azahinhasan.github.io/todoListV2_React_withAuth/#/SignIn'},
        {pName:'Real Time Chatting',type:'WebApp',leng:['ReactJS','Redux','ASP.Net','MsSql','Restful API'],sourceCode:'',liveView:''},
        
        {pName:'Blood Donation',type:'WebApp',leng:['jQuery','ASP.Net','MsSql','Restful API'],sourceCode:'https://github.com/azahinhasan/BloodDonation_AspDotNetnJquery',liveView:''},
        {pName:'Blood Donation 2',type:'WebSite',leng:['ASP.Net','MS SQL'],sourceCode:'https://github.com/azahinhasan/BloodDonationProject',liveView:''},
        {pName:'WiFi Info QRcode Generator',type:'WebApp',leng:['ReactJS','CSS'],sourceCode:'https://github.com/azahinhasan/WiFi_Info_QRcode_Generator',liveView:'https://azahinhasan.github.io/WiFi_Info_QRcode_Generator/'},
        {pName:'Guess The Number',type:'WebSite',leng:['VanillaJS','HTML','CSS'],sourceCode:'https://github.com/azahinhasan/GuessTheNumber',liveView:'https://azahinhasan.github.io/GuessTheNumber/gamePage.html'},
        {pName:'Guess The Number V2',type:'WebSite',leng:['VanillaJS','HTML','CSS'],sourceCode:'https://github.com/azahinhasan/GuessTheNumber_V2',liveView:'https://azahinhasan.github.io/GuessTheNumber_V2/'},
        {pName:'Word Counter',type:'WebSite',leng:['VanillaJS','HTML','CSS'],sourceCode:'https://github.com/azahinhasan/wordCounter',liveView:'https://azahinhasan.github.io/wordCounter/wordCountter'},
        {pName:'Download Time Calculator',type:'WebSite',leng:['VanillaJS','HTML','CSS'],sourceCode:'https://github.com/azahinhasan/downloadTimeCalculator',liveView:' https://azahinhasan.github.io/downloadTimeCalculator/'},
        {pName:'Rock Paper Scissors',type:'WebSite',leng:['VanillaJS','HTML','CSS'],sourceCode:'https://github.com/azahinhasan/rock-paper-scissors',liveView:'https://azahinhasan.github.io/rock-paper-scissors/'},
        {pName:'Coffee Shop Management',type:'WindowsApp',leng:['C#','MS SQL'],sourceCode:'https://github.com/azahinhasan/BloodDonationProject',liveView:''},
        {pName:'Tutor Finding',type:'WebSite',leng:['PHP','VanillaJS','HTML','CSS','SQL'],sourceCode:'https://github.com/azahinhasan/tutorFinding_Final',liveView:''},
        {pName:'Prison Management System',type:'WindowsApp',leng:['JAVA','XAMPP SQL'],sourceCode:'https://github.com/azahinhasan/Prison_Management_System',liveView:''},
        {pName:'Set turnoff/restart/lock/sleep timer for Pc',type:'WindowsProgram',leng:['Python'],sourceCode:'https://github.com/azahinhasan/turnOFF_restart_lock_sleep_pc',liveView:''},
 

        // {pName:'',type:'',leng:['VanillaJS','HTML'],sourceCode:'',liveView:''},
      ],Descriptions:[
        {pName:'Laptop Shop',description:'This one is the largest project so far, I have done myself. It’s a full-stack E-commerce Webapp with RESTful API. In this Webapp user can order Laptop and Laptop components. There are 2 main types of users. Which are Customer and Employee.  Customer: They can (also employees) search for any product and add them to the cart with quantity. Then they can Order also they can use Promo codes it will give them some offers if it’s a valid code. They can confirm the order with or without Login. And print the receipt. If the customer is registered and done this order by login then order information will store in the Database and he can check all orders and order’s current progress status and comment from employees if there is any in their Orders Page. From this page, he/she can also cancel the Order if the status is ‘none (no action take yet)’.  Employee: Three types in Employee: Admin, Moderator, Delivery Manager. Moderator and, Delivery Manager has some restriction. By default, the Delivery Manager can see all orders and update the progress status of orders (if the order is not canceled) and put a comment. Moderators can add, edit Product, and Promo code information. Admin can add new employees, modify access of any employee and modify salary info including the above options. And more. Every user can be stay login the same time in one browser. If he login from another browser the previous one will log out auto. And there are more features.'},
        {pName:'Blood Donation',description:'This is a group project. In backend we used Code Fast method (with auto migration). In frontend we are accessing data by API HTTP request and used jQuery. There are three users Admin, Donner, and User (who are seeking for donner). I did the Admin and Moderator part.  In this part admin can add a new employee and print the receipt, edit salary info, Promotion/Demotion Employee, disable the account, check all Reports that are made by Users and reviews them if use got too many reports, then Admin/Moderator can Ban/Unban that user, reviews the message of all user which are done from Contact us page and more. User (donner seeker) and Donner can do some more things. Users can search for donner and request them for detention. The notification will go to Donner if he accepts it User will get it to know from Notification. Both can edit their profile info. Anyone can make some donations for our site and more.'},
        {pName:'Blood Donation 2',description:'This one has almost the same feature as the Above one. But this one is made without Restful API and Frontend Framework. Here, we made it by following MVC architecture and DB Fast Method by using only the Dot Net framework.'},
        {pName:'Weather App',description:'Users can find out the current Weather info from this WebApp. I take help from two open-source API. Which Provide me the Weather info. User Can search the location or there is a find out location option which will detect the current location automatically.'},
        {pName:'Covid19 Tracker',description:'Users can find out the Covid-19 statistics. There is a World Statistics part and Country part when the user can search the country. There is a List page where users can find the list of 220+ country’s data. Also, they can sort the data by Population, Cases, Recovered, etc. By clicking on the specific Table Header or choosing from the Sort by drop-down option. '},
        {pName:'To-do List with Auth',description:'It’s a To-Do list web app. Where users can delete, add or mark as done their to-dos.But the Interesting part is users have to Sign-In/Sign-Up fast. There are 3 options for these two actions. Which are the Normal Manual user Login option where have to Sign-Up for this one, other two are Sign-In with Google or Facebook [user can connect their Google or Facebook account directly]. Using Redux for accessing the Middleware to do the user authentication in there. And storing the all-user data in Google Firebase.'},
        {pName:'Real Time Chatting',description:'It is a Full Stack Webapp. Which made with RESTful API. Where users can chat with each other. But for chatting they have to be Friends fast. Users can send a friend request with the Friend Request key. Then receiver user has to accept the request. The user can also unfriend anyone who is his friend. After unfriend users can see their previous messages but cannot send any message until they become friends again. There is a Login Activity Page where the user can see by which IP address from where and when his account login. Also, there is a button by clicking on that user can Sign Out his account from any other device/browser except the current one. And more.'},
        {pName:'WiFi Info QRcode Generator',description:'Users can generate QR-Code with Wi-Fi information. By scanning the QR anyone can connect with that Wi-Fi network. The QR code is downloadable as PNG or PDF. There is a Dark and Light mood for this web app'},
        {pName:'Guess The Number',description:'For Description visit Liveview then go to Instruction option.'},
        {pName:'Guess The Number V2',description:'It is a small game where the player has to identify the number from the option. Easy to win if anyone catches a logic. There is a Hints option where I will give a random range of numbers. But using Hints will cost -3 from the total points. For right guess, the player will get +5. For the wrong guess, the player will lose 1 life. There will be a total of 5 Life. To win players have to manage total points of more than 29. If the point is less than -10 or life is less than 0 game over.'},
        {pName:'Word Counter',description:'This site will show the number of Total words, Characters and Sentences of a paragraph or sentence or word.'},
        {pName:'Download Time Calculator',description:'User have to provide Size of the file (MB/GB) and Net Speed (MBps/Mbps) then user will get the total time that it will take to complete the download.'},
        {pName:'Rock Paper Scissors',description:'Normal Rock Paper Scissors Game'},
        {pName:'Coffee Shop Management',description:'It is a group project. Make by following MVC architecture.  There are 4 types of main users. Which are the Admin, Customer, Cook, and Receptionist. Admin can add/delete/edit Coffee, modify Vat, add new Employee, modify salary, and more. Customers can order and see the specific item and total cost. The Receptionist can take the order and send the data to Cook. Cook will check it and prepare the order. After done he can mark the order as done. And there is more feature. '},
        {pName:'Tutor Finding',description:'There are 3 types for users: Admin, Tutor, and Tutor seeker. Admin modifies information regarding Employees. Such as add/edit/remove/see the list/change rank of employees, verify Tutor, review contact us texts, etc. The tutor can post a blog, edit Info, accept/reject Tutor seeker requests etc. Tutor seekers can search tutors, send them requests for teaching, make payments etc.'},
        {pName:'Prison Management System',description:''},
        {pName:'Set turnoff/restart/lock/sleep timer for Pc',description:'Timer for turn-off/restart/lock/sleep user PC. It’s just a console program. Users have to choose the action fast then set a time to execute the action.'},
        {pName:'Anime Information',description:'This app will provide the user information about Anime (Japanese Cartoon) and Manga (Japanese Comics). I used API for information. There are two main Scene Option one is for Anime other one is for Manga. On the Anime screen, there is a Search option Where the user can search any Anime and it will provide the result according to the search. There is the Top Anime part where at default there will be a top 50 results but users can see more by tapping on Arrow key. Every time tapping on the arrow key will add more 50 results with previous results. And their Upcoming part. There will be a list of Summer, Winter, and Fall upcoming anime. By tapping on any specific anime name or picture it will take to the Details screen. There will be all info about that anime and Genres part. By tapping on any genres name it will take to the screen where it will show the list related to that genre. The manga part is the same as the above Anime part.'},

        // {pName:'',description:''},

      ],
      DescriptionOf:''
  }

  filterNameChangeHandler=(event)=>{
    this.setState({filterName:event.target.value});
  }

  DescriptionHandler=(data)=>{

    if(data!=this.state.DescriptionOf){
      this.setState({DescriptionOf:data});
    }else if(data==this.state.DescriptionOf){
      this.setState({DescriptionOf:''});
    }
    

   // console.log(data);
  }

  render() {

    let data='';

    if(this.state.filterName === 'All'){
      data=(
        this.state.data.map(data=>{
          return(
            <div className={classes.Data}>
              <div className={classes.pName}>{data.pName}</div>
              <div className={classes.pType}>[ {data.type} ]</div>
              <br/>
              <div>
                <ProjectsMac leng = {data.leng}/>
              </div>


              <br/>
                <div className={classes.DescriptionButton} onClick={()=>this.DescriptionHandler(data.pName)}>{this.state.DescriptionOf == data.pName? <b style={{color:'#006466'}}>Description</b>:'Description'}</div>
                
                {this.state.DescriptionOf == data.pName? 
                    <div className={classes.Description}>
                        <br/>
                        <ProjectDescription AllDescription={this.state.Descriptions} DescriptionsOf={data.pName}/>
                    </div>
                :null}

              <br/>
              <a href={data.sourceCode} target='_blank'>SourceCode </a>
              {data.liveView != ''? <span>||<a href={data.liveView} target='_blank'> {data.type=='MobileApp'?'Download':'LiveView'}</a></span>:null}
              <br/><br/>
            </div>
          )})
      )
    }
    else{
      console.log('type: ',this.state.filterName);
      data=(
        
        this.state.data.map(data=>{
          if(data.type === this.state.filterName){
            return(
              <div className={classes.Data}>
                <div className={classes.pName}>{data.pName}</div>
                <div className={classes.pType}>[ {data.type} ]</div>
                <br/>

                <div>
                  <ProjectsMac leng = {data.leng}/>
                </div>

                <br/>
                <div className={classes.DescriptionButton} onClick={()=>this.DescriptionHandler(data.pName)}>{this.state.DescriptionOf == data.pName? <b style={{color:'#006466'}}>Description</b>:'Description'}</div>
                
                {this.state.DescriptionOf == data.pName? 
                    <div className={classes.Description}>
                        <br/>
                        <ProjectDescription AllDescription={this.state.Descriptions} DescriptionsOf={data.pName}/>
                    </div>
                :null}

              <br/>
              <a href={data.sourceCode} target='_blank'>SourceCode </a>
              {data.liveView != ''? <span>||<a href={data.liveView} target='_blank'> {data.type=='MobileApp'?'Download':'LiveView'}</a></span>:null}
              <br/><br/>
              </div>
            )
          }
        })
      )
    }
    return (

    <div className={classes.Projects} id="projects">
      <Line/>
      <br/>
      <h1>Works</h1>

      {/* <div className={classes.FiltersButtonPart}>
          <button className={classesBtn.FiltersButton}>All</button>
          <button className={classesBtn.FiltersButton}>WebSites/WebApp</button>
          <button className={classesBtn.FiltersButton}>Windows Apps</button>
          <button className={classesBtn.FiltersButton}>Others</button>
      </div> */}

      <div className={classes.ProjectFilter}>
        <span className={classes.ProjectFilterText}>FilterByType : </span> 
        <select className={classes.ProjectFilterOptions} onChange={this.filterNameChangeHandler}>
          <option value='All'>All</option>
          <option value='WebApp'>Web Apps</option>
          <option value='MobileApp'>Mobile Apps</option>
          <option value='WebSite'>WebSites</option>
          <option value='WindowsApp'>Windows Apps</option>
          <option value='WindowsProgram'>Programs</option>
        </select>
      </div>

      <div className={classes.Datas} >

{/* 
      <div className={classes.DatasBoxes} > */}
          {data}
          
        {/* </div> */}

          <CvPart/> 
        </div>

    </div>


)}
}

export default Projects;
