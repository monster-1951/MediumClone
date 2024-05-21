import { createSlice } from '@reduxjs/toolkit'
export const feedSlice = createSlice({
  name: 'Feed',
  initialState: {
    value: [{
        Title:"The Future of Artificial Intelligence: Challenges and Opportunities",
        Body:"Artificial Intelligence (AI) is poised to revolutionize various industries, offering unprecedented opportunities for innovation. However, the rapid development of AI also presents significant challenges, including ethical dilemmas and the potential for widespread job displacement. In this article, we delve into the current state of AI, its future prospects, and the measures needed to navigate its complexities.",
        PreviewTitle:"Navigating the AI Revolution",
        PreviewSubtitle:"Understanding the benefits and challenges of Artificial Intelligence.",
        PreviewImage:"/Images/AI.jpeg",
        id:1,
        PublishedOn:"10/5/2024",
        Tags:['AI', 'Technology', 'Innovation'],
      },
      {
        Title:"Climate Change and Its Impact on Global Agriculture",
        Body:"Climate change is increasingly affecting agricultural productivity around the world. Extreme weather events, shifting growing seasons, and altered water availability are just some of the challenges faced by farmers today. This article explores the impact of climate change on agriculture and discusses strategies to enhance resilience in the agricultural sector.",
        PreviewTitle:"Agriculture in a Changing Climate",
        PreviewSubtitle:"How farmers are adapting to climate change.",
        PreviewImage:"/Images/climateChange.jpeg",
        id:2,
        PublishedOn:"23/4/2024",
        Tags:['Climate Change', 'Agriculture', 'Sustainability'],
      },
      {
        Title:"The Evolution of Electric Vehicles: Past, Present, and Future",
        Body:"Electric vehicles (EVs) have come a long way since their inception. This article traces the history of EVs, examines current trends in the market, and looks ahead to future developments that promise to further revolutionize transportation.",
        PreviewTitle:"Driving the Future: Electric Vehicles",
        PreviewSubtitle:"A journey through the evolution of electric cars.",
        PreviewImage:"/Images/e-vehicles.jpeg",
        id:3,
        PublishedOn:"18/3/2024",
        Tags:['Electric Vehicles', 'Technology', 'Transportation'],
      },
      {
        Title:"Cybersecurity Threats in the Modern World: How to Stay Protected",
        Body:"In an increasingly digital world, cybersecurity threats are a major concern. This article identifies the most common types of cyber threats and offers practical advice on how individuals and organizations can protect themselves against these dangers.",
        PreviewTitle:" Safeguarding Your Digital Life",
        PreviewSubtitle:"Tips and strategies for staying safe online.",
        PreviewImage:"/Images/cyberSecurityThreats.jpeg",
        id:4,
        PublishedOn:"15/2/2024",
        Tags:['Cybersecurity', 'Technology', 'Online Safety'],
      },
      {
        Title:"The Rise of Remote Work: Implications for Businesses and Employees",
        Body:"Remote work has become more prevalent than ever, bringing both opportunities and challenges. This article examines the impact of remote work on productivity, employee well-being, and company culture, and discusses best practices for successful remote work implementation.",
        PreviewTitle:"The Remote Work Revolution",
        PreviewSubtitle: "Exploring the impact and best practice of working from home.",
        PreviewImage:"/Images/RemoteWork.jpeg",
        id:5,
        PublishedOn:"29/1/2024",
        Tags:['Remote Work', 'Business', 'Employee Well-being'],
      },
      {
        Title:" Renewable Energy: Innovations Driving the Green Revolution",
        Body:"As the world seeks to reduce its reliance on fossil fuels, renewable energy technologies are advancing rapidly. This article highlights some of the most exciting innovations in renewable energy and their potential to transform the global energy landscape.",
        PreviewTitle:"Powering the Future with Renewables",
        PreviewSubtitle:"Innovative solutions for a sustainable energy future.",
        PreviewImage:"/Images/RenewableEnergy.jpeg",
        id:6,
        PublishedOn:"0/12/2023",
        Tags:['Renewable Energy', 'Sustainability', 'Innovation'],
      },
      {
        Title:"Mental Health Awareness: Breaking the Stigma",
        Body:"Mental health is a critical component of overall well-being, yet stigma often prevents individuals from seeking help. This article discusses the importance of mental health awareness, the impact of stigma, and ways to support those struggling with mental health issues.",
        PreviewTitle:"Breaking the Silence on Mental Health",
        PreviewSubtitle:"Promoting awareness and support for mental health.",
        PreviewImage:"/Images/MentalHealth.jpeg",
        id:7,
        PublishedOn:"5/11/2023",
        Tags:['Mental Health', 'Awareness', 'Support'],
      },
      {
        Title:"Advancements in Biotechnology: Transforming Medicine",
        Body:"Biotechnology is at the forefront of medical innovation, offering new treatments and therapies that were once unimaginable. This article explores recent breakthroughs in biotechnology and their potential to revolutionize healthcare.",
        PreviewTitle:"Biotechnology's Impact on Medicine",
        PreviewSubtitle:"How biotech is transforming healthcare.",
        PreviewImage:"/Images/AdvBioTech.jpeg",
        id:8,
        PublishedOn:"15/10/2023",
        Tags:['Biotechnology', 'Medicine', 'Healthcare'],
      },
      {
        Title:"Blockchain Technology: Beyond Cryptocurrency",
        Body:"While blockchain technology is often associated with cryptocurrencies, its applications extend far beyond digital currencies. This article explores various uses of blockchain technology, including supply chain management, secure data sharing, and more.",
        PreviewTitle:"Exploring Blockchain Beyond Bitcoin",
        PreviewSubtitle:"Diverse applications of blockchain technology.",
        PreviewImage:"/Images/BlockChain.jpeg",
        id:9,
        PublishedOn:"22/9/2023",
        Tags:['Blockchain', 'Technology', 'Innovation'],
      },
      {
        Title:"The Impact of Social Media on Society: Pros and Cons",
        Body:"Social media has a profound impact on society, influencing everything from personal relationships to public discourse. This article examines the positive and negative effects of social media and offers insights on how to use these platforms responsibly.",
        PreviewTitle:"Social Media: A Double-Edged Sword",
        PreviewSubtitle:"Weighing the benefits and drawbacks of social media.",
        PreviewImage:"/Images/SocialMediaImpact.jpeg",
        id:10,
        PublishedOn:"30/8/2023",
        Tags:['Social Media', 'Society', 'Communication'],
      }
      
      
      ],
  },
  reducers: {
    FetchThePostFromFeed: (state,action) =>{
      let Edits
      state.value.map((i) => {
         if(i.id==action.payload){
          Edits = {Heading:i.Title,Data:i.Body}
          console.log(Edits);
           return {Edits};
         }
      }
      )
    },
  },
})

// Action creators are generated for each case reducer function
export const { FetchThePostFromFeed } = feedSlice.actions

export default feedSlice.reducer