// src/api/blogApi.ts
// Mock API for blog data

export interface BlogItem {
  image: string;
  date: string;
  category: string;
  heading: string;
  content: string;
  MetaTitle: string;
  MetaDescription: string;
  Megacontent: string;
  SchemaCode: string;
  link: string;
}

export const blogData: BlogItem[] = [
  {
    image: "https://futrangroup.com/tech/advanced-tech.jpg",
    date: "2020-03-16",
    MetaTitle:"3232Boost's your conversion rate",
    MetaDescription:"Learn how to boost your conversion rate with our expert marketing strategies. Discover effective techniques to increase your sales and grow your business.",
    SchemaCode:`
        {
             "@context": "https://schema.org",
             "@type": "BlogPosting",
             "mainEntityOfPage": {
                 "@type": "WebPage",
                 "@id": "https://futrangroup.com/blog/0"
             },
             "headline": "3232Boost's your conversion rate",
             "description": "Learn how to boost your conversion rate with our expert marketing strategies. Discover effective techniques to         increase   your sales and grow your business.",
             "image": "https://futrangroup.com/tech/advanced-tech.jpg",
             "author": {
                 "@type": "Person",
                 "name": "John Doe"
             },
             "publisher": {
                 "@type": "Organization",
                 "name": "Futran Group",
                 "logo": {
                 "@type": "ImageObject",
                 "url": "https://futrangroup.com/logo.png"
                 }
             },
             "datePublished": "2020-03-16"
        }`,

    category: "Marketing",
    heading: "1221Boost's your \"conversion rate\"",
    content: "Illo sint voluptas. Error voluptates culpa eligendi. ",
    Megacontent: "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    link: "/blog/0"
  },
  {
    image: "https://futrangroup.com/tech/advanced-tech.jpg",
    date: "2020-03-10", 
    MetaTitle:"How to use search engine optimization to drive sales",
    MetaDescription:"Discover how to use search engine optimization (SEO) to drive sales for your business. Learn effective SEO strategies to improve your online visibility and attract more customers.",
    SchemaCode: `{
             "@context": "https://schema.org",
             "@type": "BlogPosting",
             "mainEntityOfPage": {
                 "@type": "WebPage",
                 "@id": "https://futrangroup.com/blog/1"
             },
             "headline": "How to use search engine optimization to drive sales",
             "description": "Discover how to use search engine optimization (SEO) to drive sales for your business. Learn effective SEO strategies to improve your online visibility and attract more customers.",
             "image": "https://futrangroup.com/tech/advanced-tech.jpg",
             "author": {
                 "@type": "Person",
                 "name": "John Doe"
             },
             "publisher": {
                 "@type": "Organization",
                 "name": "Futran Group",
                 "logo": {
                 "@type": "ImageObject",
                 "url": "https://futrangroup.com/logo.png"
                 }
             },
             "datePublished": "2020-03-10"
        }`,


    category: "Sales",
    heading: "How to use search engine optimization to drive sales",
    content: "Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.",
    Megacontent: "Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.",
    link: "/blog/1"
  },
  {
    image: "https://futrangroup.com/tech/advanced-tech.jpg",
    date: "2020-02-12",
    MetaTitle:"Improve your customer experience",
    MetaDescription:"Learn how to improve your customer experience with our expert tips and strategies. Discover effective ways to enhance customer satisfaction and loyalty for your business.",
    SchemaCode: `{
             "@context": "https://schema.org",
             "@type": "BlogPosting",
             "mainEntityOfPage": {
                 "@type": "WebPage",
                 "@id": "https://futrangroup.com/blog/2"
             },
             "headline": "Improve your customer experience",
             "description": "Learn how to improve your customer experience with our expert tips and strategies. Discover effective ways to enhance customer satisfaction and loyalty for your business.",
             "image": "https://futrangroup.com/tech/advanced-tech.jpg",
             "author": {
                 "@type": "Person",
                 "name": "John Doe"
             },
             "publisher": {
                 "@type": "Organization",
                 "name": "Futran Group",
                 "logo": {
                 "@type": "ImageObject",
                 "url": "https://futrangroup.com/logo.png"
                 }
             },
             "datePublished": "2020-02-12"
        }`,

    category: "Business",
    heading: "Improve your customer experience",
    content: "Cupiditate \"maiores ullam\" eveniet adipisci i'n doloribus nulla minus. Voluptas iusto libero adipisci rem et corporis. Nostrud sint anim sunt aliqua. Nulla eu labore irure incididunt velit cillum quis magna dolore.",
    Megacontent: "Cupiditate \"maiores ullam\" eveniet adipisci i'n doloribus nulla minus. Voluptas iusto libero adipisci rem et corporis. Nostrud sint anim sunt aliqua. Nulla eu labore irure incididunt velit cillum quis magna dolore.Cupiditate \"maiores ullam\" eveniet adipisci i'n doloribus nulla minus. Voluptas iusto libero adipisci rem et corporis. Nostrud sint anim sunt aliqua. Nulla eu labore irure incididunt velit cillum quis magna dolore.Cupiditate \"maiores ullam\" eveniet adipisci i'n doloribus nulla minus. Voluptas iusto libero adipisci rem et corporis. Nostrud sint anim sunt aliqua. Nulla eu labore irure incididunt velit cillum quis magna dolore.Cupiditate \"maiores ullam\" eveniet adipisci i'n doloribus nulla minus. Voluptas iusto libero adipisci rem et corporis. Nostrud sint anim sunt aliqua. Nulla eu labore irure incididunt velit cillum quis magna dolore.Cupiditate \"maiores ullam\" eveniet adipisci i'n doloribus nulla minus. Voluptas iusto libero adipisci rem et corporis. Nostrud sint anim sunt aliqua. Nulla eu labore irure incididunt velit cillum quis magna dolore.",
    link: "/blog/2"
  },
  {
  image: "https://futrangroup.com/tech/advanced-tech.jpg",
  date: "2021-05-10",
  MetaTitle:"Future of Autonomous Pod Transport",
  MetaDescription:"Explore how autonomous pod transportation is shaping the future of urban mobility and smart cities.",
  SchemaCode:`
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://futrangroup.com/blog/1"
        },
        "headline": "Future of Autonomous Pod Transport",
        "description": "Explore how autonomous pod transportation is shaping the future of urban mobility and smart cities.",
        "image": "https://futrangroup.com/tech/advanced-tech.jpg",
        "author": {
            "@type": "Person",
            "name": "John Doe"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Futran Group",
            "logo": {
            "@type": "ImageObject",
            "url": "https://futrangroup.com/logo.png"
            }
        },
        "datePublished": "2021-05-10"
      }`,
  category: "Technology",
  heading: "ffefefFuture of Autonomous Pod Transport",
  content: "Discover how driverless pod systems can transform modern transportation.",
  Megacontent: "Autonomous pod transit systems are designed to solve traffic congestion, reduce pollution, and improve urban mobility through intelligent infrastructure and electric powered vehicles.",
  link: "/blog/3"
},

{
  image: "https://futrangroup.com/tech/advanced-tech.jpg",
  date: "2021-08-22",
  MetaTitle:"Smart Cities and Future Mobility",
  MetaDescription:"Understand how smart cities integrate advanced mobility solutions like pod taxis and EV infrastructure.",
  SchemaCode:`
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://futrangroup.com/blog/2"
        },
        "headline": "Smart Cities and Future Mobility",
        "description": "Understand how smart cities integrate advanced mobility solutions like pod taxis and EV infrastructure.",
        "image": "https://futrangroup.com/tech/advanced-tech.jpg",
        "author": {
            "@type": "Person",
            "name": "John Doe"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Futran Group",
            "logo": {
            "@type": "ImageObject",
            "url": "https://futrangroup.com/logo.png"
            }
        },
        "datePublished": "2021-08-22"
      }`,
  category: "Smart Cities",
  heading: "Smart Cities and Future Mobility",
  content: "Smart city infrastructure supports sustainable transportation systems.",
  Megacontent: "Smart cities rely on advanced technologies such as autonomous transport, IoT, and AI-driven traffic systems to improve urban living standards and reduce environmental impact.",
  link: "/blog/4"
},

{
  image: "https://futrangroup.com/tech/advanced-tech.jpg",
  date: "2022-01-15",
  MetaTitle:"Electric Mobility Revolution",
  MetaDescription:"Electric vehicles and pod transport systems are revolutionizing sustainable urban mobility.",
  SchemaCode:`
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://futrangroup.com/blog/3"
        },
        "headline": "Electric Mobility Revolution",
        "description": "Electric vehicles and pod transport systems are revolutionizing sustainable urban mobility.",
        "image": "https://futrangroup.com/tech/advanced-tech.jpg",
        "author": {
            "@type": "Person",
            "name": "John Doe"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Futran Group",
            "logo": {
            "@type": "ImageObject",
            "url": "https://futrangroup.com/logo.png"
            }
        },
        "datePublished": "2022-01-15"
      }`,
  category: "EV Technology",
  heading: "Electric Mobility Revolution",
  content: "Electric powered transport systems are replacing traditional vehicles.",
  Megacontent: `<div class="col-12">

                                                       <h3 class="h4 fw-semibold my-3">The Shift from Cold Outreach to Authority-Led Marketing</h3>
                                                       <p>Cold DMs have lost their edge. Automated connection requests and templated messages are ignored within seconds. Buyers are more informed — and more sceptical.</p>
                                                       <p>Instead, authority-led marketing is winning.</p>
                                                       <p>When a founder consistently shares insights, frameworks, and industry perspectives, trust builds naturally. That trust shortens sales cycles. A strong B2B LinkedIn strategy focuses on inbound visibility rather than outbound pressure.</p>
                                                       <p>Trust &gt; tactics.</p>

                                                        <h3 class="h4 fw-semibold my-3">Decision-Makers Are Consuming Content Daily</h3>
                                                        <p>CXOs, founders, procurement heads, and consultants are actively consuming LinkedIn content. Many B2B buying journeys now begin with:</p>
                                                        <div class="o_circle_list_in position-relative">                     
                                                                        <p class="mb-0">A post that challenges assumptions
                                                                        </p>     
                                                        </div>
                                                         <div class="o_circle_list_in position-relative">                     
                                                                        <p class="mb-0">A case study breakdown
                                                                        </p>     
                                                        </div>
                                                         <div class="o_circle_list_in position-relative">                     
                                                                        <p class="mb-0">A thoughtful industry analysis
                                                                        </p>     
                                                        </div>
                                                        <p class="mt-2">Thought leadership influences decisions long before a sales call happens.</p>

                                                        <h3 class="h4 fw-semibold my-3">Organic Reach Still Exists — But Only for Value</h3>
                                                        <p>Contrary to popular belief, organic reach is alive. However, the LinkedIn algorithms reward expertise and engagement quality — not frequency alone.</p>
                                                        <p>Low-effort posts get buried. Insightful content sparks conversation. Meaningful comments extend reach.</p>
                                                        <p>Value creates distribution.</p>

                                                        <h2 class="h2 blog_in_main_head_h1 my-3 fw-bold text_red">
                                                            Understanding the 2026 LinkedIn Algorithm

                                                        </h2>
                                                        <p>You cannot win on LinkedIn without understanding how distribution works.
                                                            </p>

                                                        <h3 class="h4 fw-semibold my-3">Content Relevance &amp; Topic Authority</h3>
                                                        <p>LinkedIn categorises content by expertise. When you consistently post about specific themes — AI in marketing, SaaS growth, B2B performance marketing — the platform begins to associate you with those topics.</p>
                                                        <p>This builds topic authority and helps with <span><a class="bloglink text-[#00bf11]" target="_blank" href="/" contenteditable="false" style="cursor: pointer;">brand growth on LinkedIn</a></span>.</p>
                                                        <p>A scattered posting strategy confuses the algorithm. A focused one compounds reach.</p>

                                                         <h3 class="h4 fw-semibold my-3">Dwell Time &amp; Meaningful Conversations</h3>
                                                         <p>Likes are no longer the most powerful metric. Time spent reading and commenting matters more.</p>
                                                         <p>Long-form posts that hold attention signal value. Conversations in the comments section amplify distribution.</p>
                                                         <p>In 2026, depth &gt; surface engagement.</p>


                                                </div>`,
  link: "/blog/5"
},

{
  image: "https://futrangroup.com/tech/advanced-tech.jpg",
  date: "2022-06-05",
  MetaTitle:"Solving Urban Traffic Challenges",
  MetaDescription:"Learn how new transportation systems can solve traffic congestion in major cities.",
  SchemaCode:`
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://futrangroup.com/blog/4"
        },
        "headline": "Solving Urban Traffic Challenges",
        "description": "Learn how new transportation systems can solve traffic congestion in major cities.",
        "image": "https://futrangroup.com/tech/advanced-tech.jpg",
        "author": {
            "@type": "Person",
            "name": "John Doe"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Futran Group",
            "logo": {
            "@type": "ImageObject",
            "url": "https://futrangroup.com/logo.png"
            }
        },
        "datePublished": "2022-06-05"
      }`,
  category: "Urban Mobility",
  heading: "Solving Urban Traffic Challenges",
  content: "Urban transportation innovation can reduce congestion and pollution.",
  Megacontent: "Advanced transit systems such as elevated pods, automated shuttles, and integrated transport networks can significantly reduce travel time and environmental damage.",
  link: "/blog/6"
},

{
  image: "https://futrangroup.com/tech/advanced-tech.jpg",
  date: "2023-02-18",
  MetaTitle:"Pod Transit Infrastructure Development",
  MetaDescription:"Infrastructure development plays a crucial role in implementing pod taxi systems.",
  SchemaCode:`
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://futrangroup.com/blog/5"
        },
        "headline": "Pod Transit Infrastructure Development",
        "description": "Infrastructure development plays a crucial role in implementing pod taxi systems.",
        "image": "https://futrangroup.com/tech/advanced-tech.jpg",
        "author": {
            "@type": "Person",
            "name": "John Doe"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Futran Group",
            "logo": {
            "@type": "ImageObject",
            "url": "https://futrangroup.com/logo.png"
            }
        },
        "datePublished": "2023-02-18"
      }`,
  category: "Infrastructure",
  heading: "Pod Transit Infrastructure Development",
  content: "Efficient infrastructure is key to successful pod transit systems.",
  Megacontent: "Building dedicated tracks, stations, and control systems is essential to implement autonomous pod networks in growing metropolitan areas.",
  link: "/blog/7"
},

{
  image: "https://futrangroup.com/tech/advanced-tech.jpg",
  date: "2023-09-12",
  MetaTitle:"Next Generation Transportation",
  MetaDescription:"Future transportation technologies will redefine how people travel in cities.",
  SchemaCode:`
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://futrangroup.com/blog/6"
        },
        "headline": "Next Generation Transportation",
        "description": "Future transportation technologies will redefine how people travel in cities.",
        "image": "https://futrangroup.com/tech/advanced-tech.jpg",
        "author": {
            "@type": "Person",
            "name": "John Doe"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Futran Group",
            "logo": {
            "@type": "ImageObject",
            "url": "https://futrangroup.com/logo.png"
            }
        },
        "datePublished": "2023-09-12"
      }`,
  category: "Innovation",
  heading: "Next Generation Transportation",
  content: "New mobility technologies promise faster and greener transport.",
  Megacontent: "Autonomous pods, electric vehicles, and intelligent traffic systems will define the next generation of transportation infrastructure across the world.",
  link: "/blog/8"
}
];

export function fetchBlogs(): Promise<BlogItem[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(blogData), 300);
  });
}
