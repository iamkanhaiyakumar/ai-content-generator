export default [
  {
    name: "Write the Code",
    desc: "AI Model to generate programming code in any language",
    icon: "https://cdn-icons-png.flaticon.com/128/6062/6062646.png",
    category: "Coding",

    slug: "write-code",
    aiPrompt:
      "Depends on user codeDescription write a code and give output in  in rich text editor format in code block ",
    form: [
      {
        label: "Enter description of code you want along with Programming Lang",
        field: "textarea",
        name: "codeDesscripton",
        required: true,
      },
    ],
  },
  {
    name: "Explain the Code",
    desc: "AI Model to explain programming code in any language",
    icon: "https://cdn-icons-png.flaticon.com/128/8488/8488751.png",
    category: "Coding",

    slug: "explain-code",
    aiPrompt:
      "Depends on user codeDescription explain code line by line and give output in  in rich text editor format in code block ",
    form: [
      {
        label: "Enter code which you want to understand",
        field: "textarea",
        name: "codeDesscripton",
        required: true,
      },
    ],
  },
  {
    name: "Code Bug Detector",
    desc: "This tool analyzes your input, like error messages and code snippets, to pinpoint and fix bugs, offering detailed solutions and alternatives in a straightforward, user-friendly way.",
    icon: "https://cdn-icons-png.flaticon.com/128/4426/4426267.png",
    category: "code-bug-detector",

    slug: "code-bug-detector",
    aiPrompt:
      "Depends on user codeInput find bug in code and give solution and give output in  in rich text editor format in code block ",
    form: [
      {
        label: "Enter code which you want to test bug",
        field: "textarea",
        name: "codeInput",
        required: true,
      },
    ],
  },
  {
    name: "Blog Title",
    desc: "An AI tool that generate blog title depends on yout blog information",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/4186/4186534.png",
    aiPrompt:
      "Give me 5 blog topic idea in bullet wise only based on give niche & outline and give me result in Rich text editor format",
    slug: "generate-blog-title",
    form: [
      {
        label: "Enter your blog ",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter blog outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Blog Content",
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    category: "blog",
    icon: "https://cdn-icons-png.flaticon.com/128/4905/4905454.png",
    slug: "blog-content-generation",
    aiPrompt:
      "Generate Blog Content based on topic and outline in rich text editor format",
    form: [
      {
        label: "Enter your blog topic",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter blog Outline here",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Blog Topic Ideas",
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/11497/11497847.png",
    slug: "blog-topic-idea",
    aiPrompt:
      "Generate top 5 Blog Topic Ideas in bullet point only, (no Description) based on niche in rich text editor format",
    form: [
      {
        label: "Enter your Niche",
        field: "input",
        name: "niche",
        required: true,
      },
    ],
  },
  {
    name: "Youtube SEO Title",
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    category: "Youtube Tools",
    icon: "https://cdn-icons-png.flaticon.com/128/402/402075.png",
    slug: "youtube-seo-title",
    aiPrompt:
      "Give me Best SEO optimized high ranked 5 title ideas bullet wise only bases on keywords and outline and give me result in HTML tags format",
    form: [
      {
        label: "Enter your youtube video topic keyowords",
        field: "input",
        name: "keywords",
        required: true,
      },
      {
        label: "Enter youtube description Outline here",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Youtube Description",
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    category: "Youtube Tool",
    icon: "https://cdn-icons-png.flaticon.com/128/2111/2111748.png",
    slug: "youtube-description",
    aiPrompt:
      "Generate Youtube description with emoji under 4-5 lines based on topic and outline in rich text editor format",
    form: [
      {
        label: "Enter your blog topic/title",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter youtube Outline here",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Youtube Tags",
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    category: "Youtube Tool",
    icon: "https://cdn-icons-png.flaticon.com/128/4674/4674918.png",
    slug: "youtube-tag",

    aiPrompt:
      "Generate 10 Youtube tags in bullet point based on title and outline in rich text editor format",

    form: [
      {
        label: "Enter your youtube title",
        field: "input",
        name: "title",
        required: true,
      },
      {
        label: "Enter youtube video Outline here (Optional)",
        field: "textarea",
        name: "outline",
      },
    ],
  },

  {
    name: "Rewrite Article (Plagiarism Free)",
    desc: "Use this tool to rewrite existing Article or Blog Post which can bypass AI detectors and also make it plagiarism free.",
    icon: "https://cdn-icons-png.flaticon.com/128/3131/3131607.png",
    category: "Rewriting Tool",
    slug: "rewrite-article",
    aiPrompt:
      "Rewrite give article without any Plagiarism in rich text editor format",
    form: [
      {
        label:
          "🤖 Provide your Article/Blogpost or any other content to rewrite.",
        field: "textarea",
        name: "article",
        required: true,
      },
    ],
  },
  {
    name: "Text Improver",
    desc: "This handy tool refines your writing, eliminating errors and redundancies for a clear, readable result. It also offers a comprehensive tone analysis and suggests better word choices.",
    icon: "https://cdn-icons-png.flaticon.com/128/1686/1686815.png",
    category: "Writing Assistant",
    slug: "text-improver",
    aiPrompt:
      "Given textToImprove, Rewrite text without any grammar mistake and professionally in rich text editor format",
    form: [
      {
        label: "Enter text that you want to re-write or improve",
        field: "textarea",
        name: "textToImprove",
      },
    ],
  },
  {
    name: "Add Emojis to Text",
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    icon: "https://cdn-icons-png.flaticon.com/128/2584/2584606.png",
    category: "blog",
    slug: "add-emoji-to-text",
    aiPrompt:
      "Add Emoji to outline text depends on outline and rewrite it in rich text editor format",
    form: [
      {
        label: "Enter your text to add emojis",
        field: "textarea",
        name: "outline",
        required: true,
      },
    ],
  },
  {
    name: "Instagram Post Generator",
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    icon: "https://cdn-icons-png.flaticon.com/128/15713/15713420.png",
    category: "blog",

    slug: "instagram-post-generator",
    aiPrompt:
      "Generate 3 Instagram post depends on a given keywords and give output in  in rich text editor format",
    form: [
      {
        label: "Enter Keywords for your post",
        field: "input",
        name: "keywords",
        required: true,
      },
    ],
  },
  {
    name: "Instagram Hash Tag Generator",
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    icon: "https://cdn-icons-png.flaticon.com/128/7045/7045432.png",
    category: "blog",

    slug: "instagram-hash-tag-generator",
    aiPrompt:
      "Generate 15 Instagram hash tag depends on a given keywords and give output in  in rich text editor format",
    form: [
      {
        label: "Enter Keywords for your instagram hastag",
        field: "input",
        name: "keywords",
        required: true,
      },
    ],
  },
  {
    name: "Instagram Post/Reel Idea",
    desc: "An AI tool that generate New and trending instagram idea depends on your niche",
    icon: "https://cdn-icons-png.flaticon.com/128/1029/1029183.png",
    category: "instagram",

    slug: "instagram-post-idea-generator",
    aiPrompt:
      "Generate 5-10 Instagram idea depends on niche with latest trend and give output in  in rich text editor format",
    form: [
      {
        label: "Enter Keywords / Niche for your instagram idea",
        field: "input",
        name: "keywords",
        required: true,
      },
    ],
  },
  {
    name: "English Grammer Check",
    desc: "AI Model to Correct your english grammer by providing the text",
    icon: "https://cdn-icons-png.flaticon.com/128/12596/12596700.png",
    category: "english",

    slug: "english-grammer-checker",
    aiPrompt:
      "Rewrite the inputText by correcting the grammer and give output in  in rich text editor format",
    form: [
      {
        label: "Enter text to correct the grammer",
        field: "input",
        name: "inputText",
        required: true,
      },
    ],
  },

  {
    name: "Tagline Generator",
    desc: "Struggling to find the perfect tagline for your brand? Let our AI-tool assist you in creating a tagline that stands out.",
    icon: "https://cdn-icons-png.flaticon.com/128/2178/2178616.png",
    category: "Marketting",

    slug: "tagline-generator",
    aiPrompt:
      "Depends on user productName and outline generate catchy 5-10 tagline for the business product and give output  in rich text editor format ",
    form: [
      {
        label: "Product/Brand Name",
        field: "input",
        name: "productName",
        required: true,
      },
      {
        label: "What you are selling / Marketting",
        field: "textarea",
        name: "outline",
        required: true,
      },
    ],
  },
  {
    name: "Product Description",
    desc: "This is your AI-powered SEO expert, creating captivating and keyword-rich e-commerce product descriptions to boost your online sales.",
    icon: "https://cdn-icons-png.flaticon.com/128/679/679922.png",
    category: "Marketting",

    slug: "product-description",
    aiPrompt:
      "Depends on user productName and description generate small description for product for e-commer business give output  in rich text editor format  ",
    form: [
      {
        label: "Product Name",
        field: "input",
        name: "productName",
        required: true,
      },
      {
        label: "Product Details",
        field: "textarea",
        name: "outline",
        required: true,
      },
    ],
  },
  {
    name: "Book Recommender",
    desc: "An AI tool to recommend books based on your favorite genres, authors, or books you have enjoyed.",
    category: "Helper",
    icon: "https://img.icons8.com/emoji/48/books-emoji.png",
    aiPrompt:
      "Recommend books based on the givenGenres, givenAuthors, and givenBooks. Provide links to reviews and summaries.",
    slug: "book-recommender",
    form: [
      {
        label: "Favorite genres",
        field: "input",
        name: "givenGenres",
        required: false,
      },
      {
        label: "Favorite authors",
        field: "input",
        name: "givenAuthors",
        required: false,
      },
      {
        label: "Books you have enjoyed",
        field: "textarea",
        name: "givenBooks",
        required: false,
      },
    ],
  },
  {
    name: "Blog Title Generator",
    desc: "Suggests attention-grabbing blog titles based on a topic.",
    category: "Writing Tools",
    icon: "https://img.icons8.com/color/50/blog.png",
    aiPrompt:
      "Generate blog titles based on the givenTopic. Provide multiple suggestions.",
    slug: "blog-title-generator",
    form: [
      {
        label: "Topic",
        field: "input",
        name: "givenTopic",
        required: true,
      },
    ],
  },
  {
    name: "Email Tone Checker",
    desc: "Analyzes email content to ensure it conveys the intended tone (e.g., formal, friendly, persuasive).",
    category: "Writing Tools",
    icon: "https://img.icons8.com/fluency/48/mail--v1.png",
    aiPrompt:
      "Analyze the givenEmailContent and provide feedback on the tone. Suggest improvements if necessary.",
    slug: "email-tone-checker",
    form: [
      {
        label: "Email Content",
        field: "textarea",
        name: "givenEmailContent",
        required: true,
      },
      {
        label: "Intended Tone",
        field: "select",
        name: "intendedTone",
        options: ["Formal", "Friendly", "Persuasive"],
        required: true,
      },
    ],
  },
  {
    name: "Paragraph Rephraser",
    desc: "Rewrites a paragraph while maintaining the original meaning.",
    category: "Writing Tools",
    icon: "https://img.icons8.com/clouds/100/paragraph.png",
    aiPrompt:
      "Rephrase the givenParagraph while maintaining its original meaning.",
    slug: "paragraph-rephraser",
    form: [
      {
        label: "Paragraph",
        field: "textarea",
        name: "givenParagraph",
        required: true,
      },
    ],
  },
  {
    name: "Paraphrase Detector",
    desc: "Checks if two pieces of content are paraphrased versions of each other, useful for plagiarism checks.",
    category: "Writing Tools",
    icon: "https://img.icons8.com/clouds/100/hand-with-pen.png",
    aiPrompt:
      "Check if the givenContent1 and givenContent2 are paraphrased versions of each other.",
    slug: "paraphrase-detector",
    form: [
      {
        label: "Content 1",
        field: "textarea",
        name: "givenContent1",
        required: true,
      },
      {
        label: "Content 2",
        field: "textarea",
        name: "givenContent2",
        required: true,
      },
    ],
  },
  {
    name: "YouTube Video Script Generator",
    desc: "Creates video scripts based on a specified topic and target audience, helping creators produce compelling YouTube content.",
    category: "Content Creation Tools",
    icon: "https://cdn-icons-png.flaticon.com/128/1384/1384060.png", // Replace with an appropriate icon URL
    aiPrompt:
      "Generate a YouTube video script based on the givenTopic and targetAudience. Provide a detailed script outline.",
    slug: "youtube-video-script-generator",
    form: [
      {
        label: "Topic",
        field: "input",
        name: "givenTopic",
        required: true,
      },
      {
        label: "Target Audience",
        field: "input",
        name: "targetAudience",
        required: true,
      },
    ],
  },
  {
    name: "Story Idea Generator",
    desc: "Suggests unique and engaging story ideas, ideal for writers and content creators looking to explore fresh narratives.",
    category: "Content Creation Tools",
    icon: "https://img.icons8.com/clouds/150/macbook-idea.png", // Replace with an appropriate icon URL
    aiPrompt:
      "Generate unique and engaging story ideas based on the givenGenre and givenKeywords.",
    slug: "story-idea-generator",
    form: [
      {
        label: "Genre",
        field: "input",
        name: "givenGenre",
        required: true,
      },
      {
        label: "Keywords",
        field: "input",
        name: "givenKeywords",
        required: false,
      },
    ],
  },
  {
    name: "Caption Enhancer",
    desc: "Recommends creative and engaging captions for social media posts to increase visibility and user engagement.",
    category: "Content Creation Tools",
    icon: "https://img.icons8.com/clouds/500/youtube-play.png", // Replace with an appropriate icon URL
    aiPrompt:
      "Enhance the givenCaption to make it more creative and engaging for social media posts.",
    slug: "caption-enhancer",
    form: [
      {
        label: "Caption",
        field: "textarea",
        name: "givenCaption",
        required: true,
      },
    ],
  },
  {
    name: "Homework Helper",
    desc: "Assists students with their homework by providing explanations and solutions to various subjects.",
    category: "Education and Assistance Tools",
    icon: "https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-homework-university-flaticons-flat-flat-icons-3.png",
    aiPrompt:
      "Provide explanations and solutions for the givenHomeworkQuestion.",
    slug: "homework-helper",
    form: [
      {
        label: "Homework Question",
        field: "textarea",
        name: "givenHomeworkQuestion",
        required: true,
      },
    ],
  },
  {
    name: "Dialogue Maker",
    desc: "Generates engaging dialogues for stories, scripts, and other creative writing projects.",
    category: "Education and Assistance Tools",
    icon: "https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/external-dialogue-support-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png",
    aiPrompt:
      "Generate a dialogue based on the givenCharacters and givenScenario.",
    slug: "dialogue-maker",
    form: [
      {
        label: "Characters",
        field: "input",
        name: "givenCharacters",
        required: true,
      },
      {
        label: "Scenario",
        field: "textarea",
        name: "givenScenario",
        required: true,
      },
    ],
  },
  {
    name: "Write a X (Twitter) Post",
    desc: "Creates engaging and concise posts for Twitter to increase visibility and engagement.",
    category: "Social Media and Writing Tools",
    icon: "https://img.icons8.com/glassmorphism/48/twitterx.png",
    aiPrompt:
      "Generate a Twitter post based on the givenTopic and givenKeywords.",
    slug: "write-a-twitter-post",
    form: [
      {
        label: "Topic",
        field: "input",
        name: "givenTopic",
        required: true,
      },
      {
        label: "Keywords",
        field: "input",
        name: "givenKeywords",
        required: false,
      },
    ],
  },
  {
    name: "LinkedIn Post Generator",
    desc: "Generates professional LinkedIn posts to enhance your professional presence and engagement.",
    category: "Social Media and Writing Tools",
    icon: "https://img.icons8.com/color/50/linkedin.png",
    aiPrompt:
      "Generate a LinkedIn post based on the givenTopic and givenKeywords.",
    slug: "linkedin-post-generator",
    form: [
      {
        label: "Topic",
        field: "input",
        name: "givenTopic",
        required: true,
      },
      {
        label: "Keywords",
        field: "input",
        name: "givenKeywords",
        required: false,
      },
    ],
  },
  {
    name: "Schedule Maker",
    desc: "Helps you create a daily or weekly schedule to manage your time effectively.",
    category: "Lifestyle and Routine Tools",
    icon: "https://img.icons8.com/fluency/48/overtime--v1.png",
    aiPrompt: "Create a schedule based on the givenTasks and givenTimeFrame.",
    slug: "schedule-maker",
    form: [
      {
        label: "Tasks",
        field: "textarea",
        name: "givenTasks",
        required: true,
      },
      {
        label: "Time Frame",
        field: "input",
        name: "givenTimeFrame",
        required: true,
      },
    ],
  },
  {
    name: "Workout Buddy",
    desc: "Generates personalized workout plans to help you stay fit and healthy.",
    category: "Lifestyle and Routine Tools",
    icon: "https://img.icons8.com/external-smashingstocks-flat-smashing-stocks/66/external-Workout-fitness-smashingstocks-flat-smashing-stocks-3.png",
    aiPrompt:
      "Generate a workout plan based on the givenFitnessGoals and givenPreferences.",
    slug: "workout-buddy",
    form: [
      {
        label: "Fitness Goals",
        field: "input",
        name: "givenFitnessGoals",
        required: true,
      },
      {
        label: "Preferences",
        field: "textarea",
        name: "givenPreferences",
        required: false,
      },
    ],
  },
  {
    name: "Recipe Generator",
    desc: "Creates delicious recipes based on the ingredients you have and your dietary preferences.",
    category: "Lifestyle and Routine Tools",
    icon: "https://img.icons8.com/stickers/50/cooking-book.png",
    aiPrompt:
      "Generate a recipe based on the givenIngredients and givenDietaryPreferences.",
    slug: "recipe-generator",
    form: [
      {
        label: "Ingredients",
        field: "textarea",
        name: "givenIngredients",
        required: true,
      },
      {
        label: "Dietary Preferences",
        field: "input",
        name: "givenDietaryPreferences",
        required: false,
      },
    ],
  },
  {
    name: "Language Converter",
    desc: "Translates text from one language to another, helping you communicate effectively across languages.",
    category: "Language and Grammar Tools",
    icon: "https://img.icons8.com/arcade/64/language-skill.png",
    aiPrompt:
      "Translate the givenText from givenSourceLanguage to givenTargetLanguage.",
    slug: "language-converter",
    form: [
      {
        label: "Text",
        field: "textarea",
        name: "givenText",
        required: true,
      },
      {
        label: "Source Language",
        field: "input",
        name: "givenSourceLanguage",
        required: true,
      },
      {
        label: "Target Language",
        field: "input",
        name: "givenTargetLanguage",
        required: true,
      },
    ],
  },
  {
    name: "Synonym and Antonym Finder",
    desc: "Finds synonyms and antonyms for words to enhance your vocabulary and writing.",
    category: "Language and Grammar Tools",
    icon: "https://img.icons8.com/fluency/48/dictionary.png",
    aiPrompt: "Find synonyms and antonyms for the givenWord.",
    slug: "synonym-antonym-finder",
    form: [
      {
        label: "Word",
        field: "input",
        name: "givenWord",
        required: true,
      },
    ],
  },
  {
    name: "Pro Writer",
    desc: "Provides advanced writing assistance to help you craft professional and polished content.",
    category: "Specialized Writing and Content Creation Tools",
    icon: "https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-writer-professions-flaticons-flat-flat-icons-2.png",
    aiPrompt:
      "Provide advanced writing assistance for the givenText to make it more professional and polished.",
    slug: "pro-writer",
    form: [
      {
        label: "Text",
        field: "textarea",
        name: "givenText",
        required: true,
      },
    ],
  },
  {
    name: "Content Writer",
    desc: "Helps you create high-quality content for blogs, articles, and other writing projects.",
    category: "Specialized Writing and Content Creation Tools",
    icon: "https://img.icons8.com/fluency/48/libre-office-writer.png",
    aiPrompt:
      "Generate high-quality content based on the givenTopic and givenKeywords.",
    slug: "content-writer",
    form: [
      {
        label: "Topic",
        field: "input",
        name: "givenTopic",
        required: true,
      },
      {
        label: "Keywords",
        field: "input",
        name: "givenKeywords",
        required: false,
      },
    ],
  },

  {
    name: "Cold Email Generator",
    desc: "Generates professional cold emails for networking or job hunting based on user objectives.",
    category: "Job Application Tools",
    icon: "https://img.icons8.com/keek/100/email-open.png",
    aiPrompt:
      "Generate a professional cold email based on the givenObjective, givenCompany, and givenJobTitle.",
    slug: "cold-email-generator",
    form: [
      {
        label: "Objective",
        field: "input",
        name: "givenObjective",
        required: true,
      },
      {
        label: "Company",
        field: "input",
        name: "givenCompany",
        required: true,
      },
      {
        label: "Job Title",
        field: "input",
        name: "givenJobTitle",
        required: true,
      },
    ],
  },
  {
    name: "Resume Tailoring Tool",
    desc: "Tailors resumes based on a job description, providing suggestions for keyword alignment.",
    category: "Job Application Tools",
    icon: "https://img.icons8.com/stickers/50/resume.png",
    aiPrompt:
      "Provide suggestions to tailor the givenResume based on the givenJobDescription.",
    slug: "resume-tailoring-tool",
    form: [
      {
        label: "Resume",
        field: "textarea",
        name: "givenResume",
        required: true,
      },
      {
        label: "Job Description",
        field: "textarea",
        name: "givenJobDescription",
        required: true,
      },
    ],
  },
  {
    name: "Resume Bullet Point Optimizer",
    desc: "Optimizes resume bullet points in an XYZ format (action, task, result).",
    category: "Job Application Tools",
    icon: "https://img.icons8.com/color/50/overview-pages-3.png",
    aiPrompt:
      "Generate an optimized resume bullet point based on the givenAction, givenTask, and givenResult.",
    slug: "resume-bullet-point-optimizer",
    form: [
      {
        label: "Action",
        field: "input",
        name: "givenAction",
        required: true,
      },
      {
        label: "Task",
        field: "input",
        name: "givenTask",
        required: true,
      },
      {
        label: "Result",
        field: "input",
        name: "givenResult",
        required: true,
      },
    ],
  },
  {
    name: "Cover Letter Generator",
    desc: "Generates personalized cover letters for job applications based on job title, company name, and key skills.",
    category: "Job Application Tools",
    icon: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/50/external-cover-letter-job-search-flaticons-lineal-color-flat-icons-3.png",
    aiPrompt:
      "Generate a professional cover letter based on the givenJobTitle, givenCompany, and givenSkills.",
    slug: "cover-letter-generator",
    form: [
      {
        label: "Job Title",
        field: "input",
        name: "givenJobTitle",
        required: true,
      },
      {
        label: "Company",
        field: "input",
        name: "givenCompany",
        required: true,
      },
      {
        label: "Skills",
        field: "textarea",
        name: "givenSkills",
        required: true,
      },
    ],
  },
];
