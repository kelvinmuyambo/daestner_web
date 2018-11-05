import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  services: Array<any> = [
    {
      name: 'DIGITAL BUSINESS DEVELOPMENT SOLUTIONS',
      description: 'Our digital business thrives much in shaping the future of businesses by developing new generation business models which are vibrant enough to overcome challenges and improve business performance. We inspire Product modernization and sustainable growth.',
      image: 'assets/img/service/bsn-dev.jpg'
    }, {
      name: 'DIGITAL BUSINESS OPERATIONS SOLUTIONS',
      description: 'Our digital business operation solution is an inspired set of business processes regeneration technologies which thrives to reimagine modern business processes by implementing modern reengineered automated processes which improves business performance by innovative design, consolidation, and automation of business processes to generate customer value.',
      image: 'assets/img/service/bsn-op.png'
    }, {
      name: 'RETAIL CONSULTING SERVICES AND SOLUTIONS',
      description: 'As the retail trading continues to evolve at an unprecedented pace in the global new digital economy, more and more traditional and savvy retailers are at large adopting the new generation trading practices. Daestner systems as a fully fledged industry expert with wide knowledge, experience and industrial experience capacitated with modern technologies is keen for working with specialty retailers to enhance their businesses through the use of cutting-edge technologies, innovative strategies and industry best practices  as a way of gaining  competitive and profitable advantage.',
      image: 'assets/img/service/retail.jpg'
    }, {
      name: 'DIGITAL BUSINESS SYSTEMS AND TECHNOLOGIES',
      description: 'Daestner digital systems and technology seeks to improve the business systems and infrastructure by increasing ease of use, functionality, and modernization. The organization seeks to provide Simplified information and technology infrastructure solutions to businesses in various industries.',
      image: 'assets/img/service/technology.jpg'
    }, {
      name: 'SUPPLY CHAIN OPTIMISATION',
      description: 'TalkNet™ Supply Chain Optimization Service encompasses a comprehensive Supply Chain Study that identifies and evaluates various strategic business scenarios. TalkNet™ together with input from your strategic business plan, we can effectively deliver solutions to common challenges found in supply chain initiatives. Minimum overall cost calculation utilizing manufacturing, co-packer, warehousing, and transportation costs.',
      image: 'assets/img/service/supply_chain.jpg'
    }, {
      name: 'DIGITAL TRANSFORMATION',
      description: 'Digital Transformation is essentially not only about digital technology, but rather “digital transformation". Digital transformation is a call for businesses’ ability of "going paperless", and reaching a "digital business maturity". The ability to harness the fact that technology, which is digital in nature, allows businesses to solve ancient business problems.',
      more_description: 'Daestner Systems Digital Transformation program equip your business with new innovative ideas, distinctive thinking upon innovation and creativity in your business environment and industry domain. It is a full scale changing program that enhance and support new technological ways of doing business, merging with traditional business methods.\n'
        + '•	Greater insights\n'
        + '•	Productivity and efficiency gains\n'
        + '•	Collaboration\n'
        + '•	Personalisation\n'
        + '•	Engagement\n'
        + '•	Relevancy into the future\n'
        + 'Your business will be able to serve the next generation customers, who look for distinctive brands that share same perceptions as they are and invest in positive interactions. The digital journey begins today! And the era is now. Daestner systems work with various enterprises for them to embrace the values of organizational processes transformation for future business benefits. A call for   motivated leadership that is ready to innovate with digital while encouraging skills that hold agility and experimentation.',
      image: 'assets/img/service/dig_trans.jpg'
    }, {
      name: 'BUSINESS AND INFORMATION STRATEGY',
      description: '‘Information is key for business success’. Organizations survive on information in 21st century, thirst for information is never satisfied. The rapid changing business environment poses businesses with decision making challenges. Daestner Systems Information and Data Strategy services provides key benefits on overall business performance, by offering essential business information and data strategies that assist organizations to make use of every single data available in making sound decisions. This is best achieved by Daestner Insights GoldPlan®   which seeks to identify the key information a business need and the specific areas where data can be obtained and precisely customize, a robust information strategic roadmap.',
      more_description: 'Daestner Insights® is an essential business information strategy solution, a key driver of business IT strategy which benefit businesses build the basis for effective decision making by formulating customized information solutions. Insights starts by identifying the critical information needs required to run and grow the business; and then by formulating and implementing a vibrant  end-to end information and data strategy, architecture and processes for the entire business. ',
      image: 'assets/img/service/bsn_info.jpg'
    }, {
      name: 'DATA MANAGEMENT',
      description: 'Data management is a business back office practice of acquiring, organizing, validating, storing, and processing and maintenance of data for business use. Daestner System’s data management services enable businesses to access data in a timely, reliable manner, facilitating data readily available for business functions and decision-making.',
      more_description: 'Daestner Systems Data management services includes the four main pillars:\n'
        + '•	Data Analytics\n'
        + '•	Data Analysis\n'
        + '•	Data Entry and Coding\n'
        + '•	Data Storage\n\n'
        + 'Daestner Systems team will work with you to make use of your abundant data, extract business insights by organizing and cleaning- up your piles of paper, store your data digitally, and set up a more efficient data management system for your business needs. Daestner Systems suite of data management services helps you transform your data and reduce your costs. We are proficient in processing large volumes of data, data entry, illustrated tables, statistics, and data summaries into easy-to-understand formats. Equipped with both latest thinking strategies and solutions in data management technology and vast experience in data management, Daestner Systems is the way to go in back office data solutions.',
      image: 'assets/img/service/data_mgt.jpg'
    }, {
      name: 'ENTERPRISE ARCHITECTURE Solutions',
      description: 'Daestner Systems Enterprise architecture solutions are inspired, multi-faceted and extremely dynamic technologies that assist organizations to build a holistic view of the organization\'s strategy, processes, information and technology assets. Daestner Systems MyShare™ offerings help enterprises achieve guaranteed business results from the EA inventiveness. MyShare is based on a Design Thinking-led approach, which is the ultimate offerings for businesses to accomplish faster time to value.',
      more_description: 'The global business enterprises are operating in an extremely dynamic and challenging environment, which looms the traditional business model. Businesses through MyShare ™,   an enterprise end to end solution, which is a fast paced innovation which seeks to instill businesses such that they be able to leverage foundational and disruptive technologies such as cloud, automation, machine learning, and artificial intelligence (AI) to deliver quicker results in a less disruptive manner. MyShare™ Enterprise Architecture (EA) is the enabler and change agent to help businesses resilient through-out business challenges. Our architects work with your team and guarantee compliance with your organization’s values in areas such as planning, development, tool selection and implementation, and the provision of high-quality resources.',
      image: 'assets/img/service/enterprise.jpg'
    }, {
      name: 'ORGANIZATIONAL CHANGE MANAGEMENT',
      description: 'Change is completely inevitable and a phenomena which organizations have to accept. Organizations must be well prepared for a change and should have capability to handle and manage change. Business or project transformation is much more than just trade off software or modification of a few processes. For change, emphasis must be put on the most influencing factors which are, human capital and processes. Daestner Systems approach on organizational change management is a simple well-structured approach, which is focused and designed to assist businesses transition own human resource and the entire organization from existing state to a desired future state.',
      more_description: 'Organizations performance entirely depends on an in-depth understanding of change and the ability of managing change more effectively  so as to be  successful in competitive markets and as well as to survive in difficult times. Daestner Systems work with organizations in adjusting and managing changes in business and technology landscape at the same time paying particular attention to concerns that crop up with changes.',
      image: 'assets/img/service/org_change.jpg'
    }
  ];
  service: any;

  constructor() {
  }

  ngOnInit() {
  }

  select(service) {
    this.service = service;
  }

  unselect() {
    this.service = null;
  }
}
