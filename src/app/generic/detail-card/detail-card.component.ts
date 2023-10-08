import { Component } from '@angular/core';

@Component({
  selector: 'app-detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.scss']
})
export class DetailCardComponent {

  headline = `Engineer with 7.6 years of experience in full software development lifecycle from requirenment gathering, splitting 
  it to features and tasks, implmentation, delivery, deployment, incorporating feedback, maintainence.
  Primarily focused on front end development using Javascript, Typescript, Angular. `

  cienaExp = [
    'Worked on Service Order Orchestrator - SOO UI which is used to manage service orders, customer facing services - CFS, Resource facing services - RFS and other networking data.',
    'Worked on BPMN UI which is used to manage task and resource lists.',
    'Extensively worked on CFS and RFS grids and their detail card components and services.',
    'Developed various generic and reusable components.',
    'Implemented the filter functionality for service orders to help users search for SO across different time frames',
    'Resolved various critical and major issues raised by customer teams of Vocus and British Telecom.'
  ]
  
  csgExp = [
    'Developed Customer Connect web application from scratch, it was used by telecom service provider to manage customers, contacts and map market offers.',
    'Developed Customer Connect web application for about 2 years and delivered complex functionalites for Unitel and Airtel.',
    'Implemented client side changes using Angular, HTML, CSS.',
    'Implemented server side changes using REST APIs, Singleview, EPM (framework based on C language)',
    'Write unit tests using Jasmine and E2E tests using Cypress framework.',
    'Grooming features, doing sprint planning, reviewing pull requests and assisting peer developers.',
    'Led an independent scrum team of 5 developers, assisted them with their deliverables and did code reviews.',
    'Extensively worked on Business and Administration Studio - BAS for about 2 years.',
    'BAS was used by telecom service providers to manage acoounting and bill run data.',
    'Developed new screens, generic components using Angular stack.',
    'Continous upgrade of third party libraries like ag-grid, lodash.'
  ]

  dsExp = [
    'Worked in Dassault Systemes Research and Development Lab for more than 2 years.',
    'Implemented new features in CATIA V5 using C++.',
    'Resolved complex bugs raised by customer teams of Honda, Toyota, Valeo.',
    'Worked on ENOVIA V6 web application using Javascript and AngularJS.',
    'CATIA and ENOVIA products are used for product lifecycle management by designers of top companies.',
  ]

  primarySkills = [
    'Angular - Started working on Angular in 2016 with AngularJS 1.6, then have worked on Angular V2, V4, V10 and V14.',
    'Typescript - Angular is written in Typescript - Typed JavaScript.',
    'JavaScript - have worked on javascript',
    'HTML - mainly HTML 5',
    'CSS - Writing styles myself, have not used any third party frameworks, have used CSS and SCSS.',
    'Jasmine, Jest - Unit testing framework based on JavaScript.',
    'RxJS - writing reactive code.',
    'Sanity - Writing clean code, doing code reviews and writing generic code.',
    'Lead - Assist fellow developers, lead team and deliver in agreed timeframes.',
    'Wishlist - Wish to learn and work on Java, spring boot, React, database and AWS.'
  ]

  education = [
    'Online - Quite a few Udemy, Pluralsight and Youtube courses.',
    'B.Tech. - ECE - 2011-15 - Amity University, Lucknow, U.P. - Received merit scholarship and honor of Best in Leadership Skills upon graduating.',
    'XII - 2011 - 90.2% - St. Pauls School, Rampur',
    'X - 2009 - 91.4% - St. Pauls School, Rampur'
  ]



  chipSet = [{
    name: 'Primary skills',
    activate: true,
    experience: this.primarySkills,
    style: 'selected-style'
  }, {
    name: 'Experience @Ciena (1.3 years)',
    activate: false,
    experience: this.cienaExp,
    style: 'not-selected-style'
  }, {
    name: 'Experience @CSG (4 years)',
    activate: false,
    experience: this.csgExp,
    style: 'not-selected-style'
  }, {
    name: 'Experience @3DS (2.4 years)',
    activate: false,
    experience: this.dsExp,
    style: 'not-selected-style'
  }, {
    name: 'Education',
    activate: false,
    experience: this.education,
    style: 'not-selected-style'
  }]

  connectDetails = ['Mobile - +91 - 928 4700 510', 'E-mail - amangupta.ua@gmail.com', 'Hometown - Rampur (U.P.)', 'Preferred Location - Open to any']

  wishlist = 'React, Java - spring boot, Database - Postgres, AWS'

  activateChipContent(activatedChip: any) {
    this.chipSet.forEach(chip => {
      chip.activate = false
      chip.style = 'not-selected-style'
      if (chip.name === activatedChip.name) {
        chip.activate = true
        chip.style = 'selected-style'
      }
    })
  }


}
