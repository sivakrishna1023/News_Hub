import React, { Component } from 'react'
import Newsitem from './Newsitem'
import { v4 as uuidv4 } from 'uuid';
import Spinner from './Should'; 
import PropTypes from 'prop-types'
export default class News extends Component {
  capitalizeFirstLetter=(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
  static defaultProps = {
    country:"in",
     pagesize: 8,
     category:"general"
  }
  static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string
  }
   
  article=[
    {
      "source": {
        "id": null,
        "name": "The Times of Israel"
      },
      "author": "remesh",
      "title": "4 Palestinians dead, 7 IDF troops hurt in Jenin battle; Apache carries out airstrikes - The Times of Israel",
      "description": "Israeli military vehicle hit by roadside bomb, gunfire; helicopter gunship fires missiles at gunmen to allow evacuation of wounded troops; 62 Palestinians said hurt",
      "url": "https://www.timesofisrael.com/palestinian-killed-as-heavy-clashes-erupt-during-idf-raid-in-jenin/",
      "urlToImage": "https://static.timesofisrael.com/www/uploads/2023/06/Jenin5-1024x640.jpg",
      "publishedAt": "2023-06-19T09:11:15Z",
      "content": "Four Palestinians were killed as heavy clashes broke out between gunmen and Israeli troops in the city of Jenin on Monday morning. An Israeli helicopter gunship carried out rare strikes, the first in… [+4438 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "NPR"
      },
      "author": "",
      "title": "Huntington's and Alzheimer's spread like fire in the brain. What sparks them? : Shots - Health News - NPR",
      "description": "Diseases like Alzheimer's and Parkinson's spread through the brain like a forest fire. A new study suggests how the fire starts.",
      "url": "https://www.npr.org/sections/health-shots/2023/06/19/1182881226/huntingtons-spreads-like-fire-in-the-brain-alzheimers-parkinsons",
      "urlToImage": "https://media.npr.org/assets/img/2023/06/16/polyq_image1_wide-476eeb999527e4c55dad04adcf761cbbc83d1ec4-s1400-c100.png",
      "publishedAt": "2023-06-19T09:01:38Z",
      "content": "In Huntington's disease, proteins form toxic clumps that kill brain cells.\r\nStowers Institute for Medical Research\r\nDiseases like Alzheimer's, Parkinson's, and Huntington's are caused by toxic clumps… [+4156 chars]"
    },
    {
      "source": {
        "id": "reuters",
        "name": "Reuters"
      },
      "author": null,
      "title": "Exclusive: Japan regulator sounded out top domestic banks about China risks, sources say - Reuters.com",
      "description": "Japan's financial regulator has sounded out top domestic banks about China risks and whether they have plans in place if Sino-Western tensions escalate, according to multiple sources with direct knowledge of the matter.",
      "url": "https://www.reuters.com/business/finance/japan-regulator-sounded-out-top-domestic-banks-about-china-risks-sources-say-2023-06-19/",
      "urlToImage": "https://www.reuters.com/resizer/CUqFgyyWaMMQRQbKMrbBBhAAVcY=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/22PHZZRGUBNDZEXBHHUVGFYRNY.jpg",
      "publishedAt": "2023-06-19T08:22:00Z",
      "content": "TOKYO, June 19 (Reuters) - Japan's financial regulator has sounded out top domestic banks about China risks and whether they have plans in place if Sino-Western tensions escalate, according to multip… [+4173 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "NPR"
      },
      "author": "NPR",
      "title": "Multiple mass shootings across the U.S. leave at least 6 dead on holiday weekend - NPR",
      "description": "The shootings stretching from coast to coast follow a surge in homicides and other violence over the past several years that experts say accelerated during the coronavirus pandemic.",
      "url": "https://www.npr.org/2023/06/19/1183041211/deadly-mass-shootings-across-the-u-s",
      "urlToImage": "https://media.npr.org/assets/img/2023/06/19/ap23169503566624_wide-a101076cadff766edd07b3cfa565c7fe81f19126-s1400-c100.jpg",
      "publishedAt": "2023-06-19T08:03:06Z",
      "content": "A police officer works the scene of an overnight mass shooting at a strip mall in Willowbrook, Ill., Sunday, June 18, 2023.\r\nMatt Marton/AP\r\nA spate of weekend mass shootings and violence across the … [+6347 chars]"
    },
    {
      "source": {
        "id": "reuters",
        "name": "Reuters"
      },
      "author": null,
      "title": "China seen cutting key lending benchmarks as economy slows - Reuters",
      "description": "China is widely expected to cut key lending benchmarks on Tuesday in the first such easing in 10 months, a Reuters survey showed, as authorities seek to shore up a slowing recovery in the world's second-largest economy.",
      "url": "https://www.reuters.com/world/china/china-seen-cutting-key-lending-benchmarks-economy-slows-2023-06-19/",
      "urlToImage": "https://www.reuters.com/resizer/Xb-eR4wdZwx7pw85USmsC1Hi8wM=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/JVRW2WSG6ZKIHCDXZ42CCSQOCY.jpg",
      "publishedAt": "2023-06-19T07:19:00Z",
      "content": "SHANGHAI/SINGAPORE, June 19 (Reuters) - China is widely expected to cut key lending benchmarks on Tuesday in the first such easing in 10 months, a Reuters survey showed, as authorities seek to shore … [+2890 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "San Francisco Chronicle"
      },
      "author": "San Francisco Chronicle",
      "title": "4 bystanders among 6 wounded as moving gunfight rips Fisherman's Wharf - San Francisco Chronicle",
      "description": "China is widely expected to cut key lending benchmarks on Tuesday in the first such easing in 10 months, a Reuters survey showed, as authorities seek to shore up a slowing recovery in the world's second-largest economy" ,
      "url": "https://www.sfchronicle.com/bayarea/article/pier-39-shooting-san-francisco-18159021.php",
      "urlToImage": "https://static.timesofisrael.com/www/uploads/2023/06/Jenin5-1024x640.jpg",
      "publishedAt": "2023-06-19T07:07:30Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "CNBC"
      },
      "author": "Silvia Amaro",
      "title": "Rate cuts, hikes and pauses: The world's central banks just made very different decisions - CNBC",
      "description": "Major central banks are taking very different approaches to monetary policy, as the global economy \"is no longer synchronized,\" an expert said.",
      "url": "https://www.cnbc.com/2023/06/19/fed-ecb-boj-pboc-central-banks-monetary-policy-decision-are-diverging.html",
      "urlToImage": "https://image.cnbcfm.com/api/v1/image/107258817-1687154306568-gettyimages-883202480-14339170.jpeg?v=1687156788&w=1920&h=1080",
      "publishedAt": "2023-06-19T06:39:48Z",
      "content": "From hawkish pauses to rate hikes and dovish tones, the world's biggest central banks last week struck very different tones on monetary policy.\r\nThe European Central Bank on Thursday hiked rates and … [+3428 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "New York Post"
      },
      "author": "David Propper",
      "title": "Fishing crew denied $3.5M in prize money after 600-pound marlin DQ’d in tournament - New York Post ",
      "description": "“It’s the final hour, the final day and we fought with him for six hours,” McCoy told the Washington Post. “It’s a tough pill to swallow.”",
      "url": "https://nypost.com/2023/06/19/massive-marlin-dqd-in-big-rock-blue-marlin-tournament-over-mutilation/",
      "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2023/06/newspress-collage-jilqvvzk5-1687155758176.jpg?quality=75&strip=all&1687141404&w=1024",
      "publishedAt": "2023-06-19T06:33:00Z",
      "content": "A shark took a bite out of one crews dream of winning a high-stakes fishing competition when the massive marlin they reeled in was disqualified by tournament officials for being mutilated. \r\nThe Big … [+2124 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Kstp.com"
      },
      "author": "Kyle Brown",
      "title": "Minneapolis prepares to spend millions to carry out federal consent decree - KSTP",
      "description": "If other major cities' consent decrees with the U.S. Department of Justice are any indication, Minneapolis will be spending millions each year to reform its police force.",
      "url": "https://kstp.com/kstp-news/top-news/minneapolis-prepares-to-spend-millions-to-carry-out-federal-consent-decree/",
      "urlToImage": "https://kstp.com/wp-content/uploads/2023/04/minneapolis-homicide-park-avenue-04-03-23.jpg",
      "publishedAt": "2023-06-19T06:31:51Z",
      "content": "The Minneapolis City Council directed staff members to research the potential costs of implementing the recent consent decree agreement between the city and the U.S. Department of Justice.\r\nResults o… [+1492 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Africanews English"
      },
      "author": null,
      "title": "President Ramaphosa tells 'adamant' Putin 'the war must end' in Ukraine - Africanews English",
      "description": "Putin reiterated his position that Ukraine and its Western allies had started the conflict long before Russia sent its armed forces over the border in February last year, something they deny.",
      "url": "http://www.africanews.com/2023/06/18/president-ramaphosa-tells-adamant-putin-the-war-must-end-in-ukraine/",
      "urlToImage": "https://static.euronews.com/articles/stories/07/68/47/30/1024x538_cmsv2_9ef5b595-5d7b-5d60-987d-bd0b3d4adace-7684730.jpg",
      "publishedAt": "2023-06-19T06:17:19Z",
      "content": "South African President Cyril Ramaphosa, who is in Russia as part of a peace-seeking delegation, on Saturday, told his Russian counterpart Vladimir Putin that the conflict in Ukraine had to stop.\r\n\"T… [+4105 chars]"
    },
    {
      "source": {
        "id": "wired",
        "name": "Wired"
      },
      "author": "Gabriela Galindo",
      "title": "Apple Is Taking On Apples in a Truly Weird Trademark Battle - WIRED",
      "description": "Apple, the company, wants rights to the image of apples, the fruit, in Switzerland—one of dozens of countries where it’s flexing its legal muscles.",
      "url": "https://www.wired.com/story/apple-vs-apples-trademark-battle/",
      "urlToImage": "https://media.wired.com/photos/648ccd0b57ff6ec62db8a7dc/191:100/w_1280,c_limit/whiteapple_redbackground_biz_GettyImages-740523449.jpg",
      "publishedAt": "2023-06-19T06:00:00Z",
      "content": "Over the past few years, Apple has pursued a meal-prepping app with a pear logo, a singer-songwriter named Frankie Pineapple, a German cycling route, a pair of stationery makers, and a school distric… [+3483 chars]"
    },
    {
      "source": {
        "id": "associated-press",
        "name": "Associated Press"
      },
      "author": "Doug Ferguson",
      "title": "Wyndham Clark plays big and becomes a major champion at the US Open - The Associated Press",
      "description": "LOS ANGELES (AP) — In the city of stars, Wyndham Clark had his own script in mind in the U.S. Open. In front of him was Rory McIlroy, one of golf's biggest talents who looked ready to end his perplexing nine-year drought in the majors.",
      "url": "https://apnews.com/article/us-open-wyndham-clark-rory-scheffler-los-angeles-a75cb078537a1c0c2ed1a2adacb0323b",
      "urlToImage": "https://storage.googleapis.com/afs-prod/media/abb14ca6a91f4865b315ef930f3ff535/1964.webp",
      "publishedAt": "2023-06-19T05:50:18Z",
      "content": "LOS ANGELES (AP) In the city of stars, Wyndham Clark had his own script in mind in the U.S. Open.\r\nIn front of him was Rory McIlroy, one of golfs biggest talents who looked ready to end his perplexin… [+6250 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "CBS Sports"
      },
      "author": "",
      "title": "In acquiring Bradley Beal, Phoenix Suns are doubling down on their win-now mentality - CBS Sports",
      "description": "Adding Beal to a roster with Booker and Durant doesn't address the depth issue",
      "url": "https://www.cbssports.com/nba/news/in-acquiring-bradley-beal-phoenix-suns-are-doubling-down-on-their-win-now-mentality/",
      "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/06/18/5ff801bc-ba57-4f21-b0ed-c128073d55e7/thumbnail/1200x675/da61c4ef4133cb71f6d480b4705b5abc/untitled-design-2023-06-18t172050-058.png",
      "publishedAt": "2023-06-19T05:26:00Z",
      "content": "The Phoenix Suns are all in. \r\nUnder new owner Mat Ishbia, the Suns have set up the framework for a deal that will bring in Bradley Beal to pair with Kevin Durant and Devin Booker, sources confirmed … [+3704 chars]"
    },
    {
      "source": {
        "id": "marca",
        "name": "Marca"
      },
      "author": "LW",
      "title": "Travis Barker's playmate ex-wife reveals the truth about Kourtney Kardashian's pregnancy - Marca English",
      "description": "Kourtney Kardashian announced her pregnancy to husband Travis Barker during a concert on Friday and although she made it look like it was a surprise for her husband, it turns out f",
      "url": "https://www.marca.com/en/lifestyle/celebrities/2023/06/19/648fb72ee2704e30108b45e8.html",
      "urlToImage": "https://phantom-marca.unidadeditorial.es/c74862a06771c832197e378c0deb6844/resize/1200/f/jpg/assets/multimedia/imagenes/2023/06/19/16871398598681.jpg",
      "publishedAt": "2023-06-19T04:54:00Z",
      "content": "Kourtney Kardashian announced her pregnancy to husband Travis Barker during a concert on Friday and although she made it look like it was a surprise for her husband, it turns out fans did not buy it,… [+1459 chars]"
    },
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "Kylie Atwood,Simone McCarthy",
      "title": "Blinken meets China’s top diplomat in final day of high stakes visit to Beijing - CNN",
      "description": "US Secretary of State Antony Blinken sat down with China’s top diplomat Monday on the final day of a high stakes visit to Beijing aimed at stabilizing relations, which cratered in the wake of a dispute over a Chinese surveillance balloon.",
      "url": "https://www.cnn.com/2023/06/18/china/blinken-china-visit-wang-yi-meeting-intl-hnk/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230619035211-blinken-china-0619.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2023-06-19T04:53:00Z",
      "content": "US Secretary of State Antony Blinken sat down with Chinas top diplomat Monday on the final day of a high stakes visit to Beijing aimed at stabilizing relations, which cratered in the wake of a disput… [+5388 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Chicago Tribune"
      },
      "author": "Jake Sheridan",
      "title": "5 shot in Roseland at Father's Day barbecue, police say - Chicago Tribune",
      "description": "Families had been gathering at the park when a car drove up and opened fire, police said.",
      "url": "https://www.chicagotribune.com/news/breaking/ct-roseland-shooting-fathers-day-bbq-20230619-hz6h63i6qbdrlip65c377cvzaq-story.html",
      "urlToImage": "https://www.chicagotribune.com/resizer/7jlNAu4CfcRQYGPwxtdiV1eavgA=/1200x630/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/tronc/X3G7A3HWEZBXJNGLLCT2LHWB7A.JPG",
      "publishedAt": "2023-06-19T04:40:24Z",
      "content": "Five people were shot Sunday night during a Fathers Day barbecue in Roseland, police said.\r\nPolice taped off the 9900 block of South Princeton Avenue around Wendell Smith Park.\r\nFamilies had been gat… [+1817 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "MLSsoccer.com"
      },
      "author": "mlssoccer",
      "title": "USMNT Player Ratings: Gio Reyna dismantles Canada in Nations League final | MLSSoccer.com - MLSsoccer.com",
      "description": "Canada came out with a bold game plan in the 2023 Concacaf Nations League final, one that showed the burgeoning regional power's confidence against the US men's national team: Mark the midfield tight, dominate possession and dare the Yanks to take advantage o…",
      "url": "https://www.mlssoccer.com/news/usmnt-player-ratings-gio-reyna-dismantles-canada-in-nations-league-final",
      "urlToImage": "https://images.mlssoccer.com/image/private/t_q-best/prd-league/z4aglmyxexsbqvvq09ep.png",
      "publishedAt": "2023-06-19T04:04:17Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "KTRK-TV"
      },
      "author": null,
      "title": "Big Pokey death: Houston rapper Milton Powell dies after collapsing in Beaumont, officials say - KTRK-TV",
      "description": "Milton Powell, known as 'Big Pokey,' was considered a pillar in the Houston hip-hop community and was \"larger than life\", Houston Mayor Sylvester Turner said in a tweet.",
      "url": "https://abc13.com/big-pokey-died-what-happened-to-houston-rapper-passed-out/13398232/",
      "urlToImage": "https://cdn.abcotvs.com/dip/images/13398419_061823-ktrk-big-pokey-death-desi-Sunimg.jpg?w=1600",
      "publishedAt": "2023-06-19T03:56:15Z",
      "content": "HOUSTON, Texas (KTRK) -- The city's rap community is mourning Sunday after officials announced the death of rap legend \"Big Pokey.\"\r\nEyewitness News confirmed with Justice of The Peace Tom Gillam III… [+2007 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "FOX 9"
      },
      "author": "Rose Schmidt",
      "title": "Minneapolis PD investigating leak of video showing deadly crash - FOX 9 Minneapolis-St. Paul",
      "description": "Video circulating on social media Sunday showed the tragic moment five young women died in a car crash. Law enforcement officials are responding to criticism from the community about the footage being leaked.",
      "url": "https://www.fox9.com/news/minneapolis-pd-investigating-leak-of-video-showing-deadly-crash",
      "urlToImage": "https://images.foxtv.com/static.fox9.com/www.fox9.com/content/uploads/2023/06/1280/720/lake-street-deadly-crash.jpg?ve=1&tl=1",
      "publishedAt": "2023-06-19T03:54:35Z",
      "content": "MINNEAPOLIS (FOX 9) - Video circulating on social media Sunday showed the tragic moment five young women died in a car crash. Law enforcement officials are responding to criticism from the community … [+2940 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Formula 1"
      },
      "author": "F1",
      "title": "WATCH: Enjoy the race start at the 2023 Canadian Grand Prix as Hamilton claims P2 behind Verstappen - Formula 1",
      "description": "Max Verstappen enjoyed a textbook getaway as the five lights went out at the 2023 Canadian Grand Prix to maintain his lead from pole position on Lap 1 of 70.",
      "url": "https://www.formula1.com/en/latest/article.watch-enjoy-the-race-start-at-the-2023-canadian-grand-prix-as-hamilton.wm4Gy0WcnBJryqEnW62oi.html",
      "urlToImage": "https://d2n9h2wits23hf.cloudfront.net/image/v1/static/6057949432001/a49f6835-eaea-49aa-852b-028cac1c494c/00e212eb-31cd-4427-983d-8cb847dfca87/640x360/match/image.jpg",
      "publishedAt": "2023-06-19T03:39:02Z",
      "content": "Max Verstappen enjoyed a textbook getaway as the five lights went out at the 2023 Canadian Grand Prix to maintain his lead from pole position on Lap 1 of 70.\r\nVerstappens old sparring partner Lewis H… [+525 chars]"
    }
  ]

  constructor(props){
    super(props);
    this.state={
      article: this.article,
      page:1,
      loading: false
    }
     document.title=`${this.capitalizeFirstLetter(this.props.category)}-NewsMonkey`;
  }
  async updatenews(){
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=be83e2c3834e4aa3bf721a420875cd92&page=${this.state.page}&pagesize=${this.props.pagesize}`
    this.setState({loading:true});
    let data= await fetch(url);
    let parseddata=await data.json();
    this.setState({loading:false});
    console.log(parseddata);
          this.setState({
            page:this.state.page+1,
            article:parseddata.articles,
            loading:false,
          })
  }
  async componentDidMount(){
    this.updatenews();
    // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=be83e2c3834e4aa3bf721a420875cd92&page=${this.state.page}&pagesize= ${this.props.pagesize} `;
    // this.setState({loading:true});
    // let data= await fetch(url);
    // let parseddata=await data.json();
    // this.setState({loading:false});
    // console.log(parseddata);
    // this.setState({article:parseddata.articles,
    //   loading:false,
    // })
  }

   handleprevclick= async ()=>{
    this.setState({page:this.state.page-1});
    this.updatenews();
    // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=be83e2c3834e4aa3bf721a420875cd92&page=${this.state.page-1}&pagesize=${this.props.pagesize}`
    //  this.setState({loading:true});
    // let data= await fetch(url);
    // let parseddata=await data.json();
    // this.setState({loading:false});
    // console.log(parseddata);
    //       this.setState({
    //         page:this.state.page-1,
    //         article:parseddata.articles,
    //         loading:false,
    //       })

  }
   handlenextclick= async ()=>{
    this.setState({page:this.state.page+1});
    this.updatenews();
  //  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=be83e2c3834e4aa3bf721a420875cd92&page=${this.state.page+1}&pagesize=${this.props.pagesize}`
  //   this.setState({loading:true});
  //   let data= await fetch(url);
  //   let parseddata=await data.json();
  //   this.setState({loading:false});
  //   console.log(parseddata);
  //         this.setState({
  //           page:this.state.page+1,
  //           article:parseddata.articles,
  //           loading:false,
  //         })
  }
  render() {
    return (
      <div>
       <div className="container my-3">
       <h2 className='text-center' >NewsMoney - Top  {this.capitalizeFirstLetter(this.props.category)}   HeadLines { this.state.loading && <Spinner/>}
       </h2>
      
       <div className="row">
       { !this.state.loading && this.state.article.map((element)=> 
        <div className="col-md-4" key={uuidv4()}  >
        <Newsitem title={element.title?element.title:""}  dis={element.description?element.description:""} imageurl={element.urlToImage} newsurl={element.url}  author={element.author} time={element.publishedAt} source={element.source.name}/>
        </div>
        )} 
         <div className="container d-flex justify-content-between">
       <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handleprevclick} > &larr; Previous</button>
       <button disabled={this.state.page>4}  type="button" className="btn btn-dark"  onClick={this.handlenextclick} >Next  &rarr; </button>
       </div>
       </div>
        </div>
      </div>
    )
  }
}
