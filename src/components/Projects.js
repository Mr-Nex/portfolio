import React from 'react'
import "./Projects.css";

const Projects = () => {
    return (
        <section id="projects" class="projects">

  <div class="card mb-3">
    <div class="text-center">
    <img class="card-img-top" src="https://media.giphy.com/media/WBTUlyKBVlTTa/giphy.gif" alt="Mega BITE" />
    </div>
    <div class="card-body">
      <h5 class="card-title">Mega BITE (Online Food Ordering App)<hr /></h5>
      <p class="card-text">Created a fully functional online food ordering
        app from scratch, with user account management<br /> on Google Firebase. App has
        feature like cart storage, item search, alter
        order/items, etc.</p>
      <p class="card-text"><small class="text-muted">
        <i class="fa fa-android" aria-hidden="true"></i><a class="andr" href="https://play.google.com/store/apps/details?id=generator.nex.rexx.userregistration" target="_blank">Check out this App on Google Play</a><br />
        <i class="fa fa-github" aria-hidden="true"></i><a class="git" href="https://github.com/Mr-Nex/Mega-Bite-App" target="_blank">Check out its Source Code</a>
      </small></p>
    </div>
  </div>

  <div class="card mb-3">
    <div class="text-center">
    <img class="card-img-top" src="https://media.giphy.com/media/5UDsrMd6ctz6KDXyIo/giphy.gif" alt="Complete Fitness" />
    </div>
    <div class="card-body">
      <h5 class="card-title">Complete Fitness (Mobile App)<hr /></h5>
      <p class="card-text">This app has all sort of Health and Workout related
        information. Along with some helful tools like -<br /> Stop Watch, Timer, etc. With UI elements like Cards, Recycler View, Collapsing Toolbar layout, etc.</p>
      <p class="card-text"><small class="text-muted">
        <i class="fa fa-android" aria-hidden="true"></i><a class="andr" href="https://play.google.com/store/apps/details?id=generator.nex.rexx.completefitness" target="_blank">Check out this App on Google Play</a><br />
        <i class="fa fa-github" aria-hidden="true"></i><a class="git" href="https://github.com/Mr-Nex/My-Fitness-App" target="_blank">Check out its Source Code</a>
      </small></p>
    </div>
  </div>

  <div class="card mb-3">
    <div class="text-center">
    <img class="card-img-top" src="https://media.giphy.com/media/yN4oBAZA96dkEFiWyr/giphy.gif" alt="Complete Fitness Website" />
    </div>
    <div class="card-body">
      <h5 class="card-title">Complete Fitness - Website<hr /></h5>
      <p class="card-text">Everything related to Workout and Diet with illustrative GIFs, user account and session management, etc.</p>
      <p class="card-text"><small class="text-muted">
        <i class="fa fa-github" aria-hidden="true"></i><a class="git" href="https://github.com/Mr-Nex/My-Fitness-Website" target="_blank">Check out its Source Code</a>
      </small></p>
    </div>
  </div>

  <div class="card mb-3">
    <div class="text-center">
    <img class="card-img-top" src="https://media.giphy.com/media/BLUF6jCNSGm2EBAngB/giphy.gif" alt="Event Management" />
    </div>
    <div class="card-body">
      <h5 class="card-title">Event Management App<hr /></h5>
      <p class="card-text">Made for event management, handling user data
        (Firebase Realtime Database), broadcasting<br />
        information about the events, etc.</p>
      <p class="card-text"><small class="text-muted">
        <i class="fa fa-github" aria-hidden="true"></i><a class="git" href="https://github.com/Mr-Nex/Event-Management-App" target="_blank">Check out its Source Code</a>
      </small></p>
    </div>
  </div>

</section>
    )
}

export default Projects
