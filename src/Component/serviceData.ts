export type ServiceSection = {
  title: string;
  paragraphs: string[];
};

export type ServiceData = {
  title: string;
  subtitle: string;
  sections: ServiceSection[];
};

export const servicePages: Record<string, ServiceData> = {
  "/services/reiki": {
    title: "Reiki Healing",
    subtitle:
      "A journey of healing, inner balance, personal growth and deeper self-discovery through Reiki.",

    sections: [
      {
        title: "What Are You Looking For?",
        paragraphs: [
          "Sometimes we know that something in our life is not right, but we cannot clearly understand what is happening or what we should do next.",
          "You may be dealing with stress, health concerns, relationship difficulties, lack of confidence, career problems, negative experiences or deeper questions about your life.",
          "Reiki can be explored as a healing and spiritual practice while you work toward greater balance, awareness and wellbeing.",
        ],
      },
      {
        title: "Feeling Stressed, Overwhelmed or Mentally Disturbed?",
        paragraphs: [
          "Are you constantly stressed, emotionally burdened, restless or unable to find inner peace?",
          "Reiki provides a dedicated space for healing, relaxation, inner awareness and reconnecting with yourself.",
          "Through regular practice, Reiki can become part of your personal journey toward greater calm, balance and self-awareness.",
        ],
      },
      {
        title: "Are You Facing Ongoing Problems?",
        paragraphs: [
          "Do you feel that the same problems keep returning? Do you feel stuck and unable to understand why?",
          "Reiki can be used as a practice for looking inward, becoming more aware of your thoughts and emotions, and exploring the deeper patterns associated with your experiences.",
          "The intention is not simply to deal with what is happening on the surface, but to encourage deeper personal awareness and healing.",
        ],
      },
      {
        title: "Are You Living With a Health Problem?",
        paragraphs: [
          "Are you experiencing an illness, disease, pain or another health-related difficulty?",
          "Reiki may be explored as a complementary healing and wellbeing practice, alongside appropriate medical diagnosis and treatment.",
          "We take health concerns seriously. Reiki is not presented as a replacement for a doctor, hospital or other qualified healthcare professional.",
        ],
      },
      {
        title: "We Help You Find the Right Path",
        paragraphs: [
          "If your concern requires medical investigation or treatment, we believe you should receive the right professional care.",
          "We can help you understand when professional medical attention may be appropriate and, where suitable, guide you toward reputable healthcare providers or organizations that can evaluate your condition and advise you about appropriate treatment.",
          "Our approach is simple: understand the problem, support the person, encourage the right professional care and continue the healing journey.",
        ],
      },
      {
        title: "Are You Facing Relationship Problems?",
        paragraphs: [
          "Are you experiencing repeated conflict, emotional distance, misunderstandings or difficulties with someone important to you?",
          "Reiki can support self-awareness and emotional balance, helping you look at your own inner responses and patterns.",
          "The practice can become part of a journey toward greater empathy, awareness and healthier relationships.",
        ],
      },
      {
        title: "Do You Feel Surrounded by Negative Energy?",
        paragraphs: [
          "Do you feel that a person, place or situation is affecting you negatively?",
          "Do you feel energetically disturbed, uncomfortable or emotionally drained?",
          "Reiki practices can be explored for grounding, energetic awareness, inner cleansing and spiritual protection.",
          "These experiences are approached as personal and spiritual concerns rather than as objectively established causes of illness or misfortune.",
        ],
      },
      {
        title: "Are You Struggling With Confidence?",
        paragraphs: [
          "Do you doubt yourself? Do you feel insecure or unable to express yourself fully?",
          "Reiki practice can become part of a personal development journey focused on self-awareness, inner strength and confidence.",
          "As you become more aware of yourself, you can begin to understand your strengths, limitations and potential more clearly.",
        ],
      },
      {
        title: "Are You Stuck in Your Career or Life Direction?",
        paragraphs: [
          "Are you confused about your career? Do you feel disconnected from your work or unsure about what you really want to do?",
          "Reiki, meditation and intention-based practices can help you turn inward, reflect on your aspirations and become clearer about the direction you want to explore.",
          "The aim is to help you connect your intentions with meaningful choices and practical action.",
        ],
      },
      {
        title: "Are You Looking for Wealth, Abundance or Goal Achievement?",
        paragraphs: [
          "Do you want to improve your relationship with money, prosperity and abundance?",
          "Do you have important goals but find it difficult to move toward them?",
          "Reiki can be combined with intention, awareness, visualization and focused personal action to explore your relationship with abundance and the goals you want to achieve.",
        ],
      },
      {
        title: "Do You Want to Develop Your Intuition?",
        paragraphs: [
          "Do you sometimes feel that you have an inner sense or intuition that you would like to understand better?",
          "Reiki practice can provide a framework for exploring intuition, inner awareness, empathy and spiritual insight.",
          "The emphasis is on regular practice, observation and personal exploration.",
        ],
      },
      {
        title: "Do You Feel There Is More Potential Within You?",
        paragraphs: [
          "Do you feel that you have abilities, talents or potential that you have not yet fully explored?",
          "Reiki can become a pathway for self-discovery and personal development.",
          "Through practice, reflection and greater awareness, you can explore your inner strengths and discover new possibilities for personal growth.",
        ],
      },
      {
        title: "Are You Searching for Answers About Life?",
        paragraphs: [
          "Why am I here? What is my purpose? Why do certain experiences keep happening in my life?",
          "Many people eventually begin asking deeper questions about life, existence, consciousness and their spiritual path.",
          "Reiki connects the practitioner with what is described as universal life-force energy and encourages meditation, mindfulness and looking inward.",
          "The journey can help you explore the possibility that some of the answers you seek may already be within you.",
        ],
      },
      {
        title: "Do You Want Deeper Spiritual Growth?",
        paragraphs: [
          "Perhaps your concern is not a particular problem. Perhaps you simply feel that you want to understand yourself and consciousness more deeply.",
          "Reiki can become a regular spiritual practice for inner awareness, personal development and spiritual exploration.",
          "For those drawn toward deeper practices, Reiki can be part of a continuing journey of self-discovery and awakening.",
        ],
      },
      {
        title: "Reiki Is More Than Receiving Healing",
        paragraphs: [
          "Reiki is not only something you can receive from a practitioner. You can also learn Reiki and develop your own practice.",
          "Learning Reiki can give you an opportunity to practise on yourself, support your loved ones, develop your healing skills and explore your own spiritual journey.",
          "For those who wish to take their practice further, Reiki can also become a foundation for developing a healing practice and helping others.",
        ],
      },
    ],
  },

  "/services/dowsing": {
    title: "Dowsing",
    subtitle:
      "Explore dowsing as an intuitive practice for reflection, environmental exploration and personal awareness.",

    sections: [
      {
        title: "What Is Dowsing?",
        paragraphs: [
          "Dowsing is a traditional practice in which tools such as rods or pendulums are used to explore questions or perceived patterns.",
          "Some practitioners use dowsing for water exploration, environmental enquiries, personal reflection and spiritual exploration.",
          "Dowsing results are subjective and should not be treated as scientifically verified measurements or definitive evidence.",
        ],
      },
      {
        title: "What Would You Like to Explore?",
        paragraphs: [
          "You may be curious about a property, the environment around you, personal energy, space harmony or a question that you would like to explore through a dowsing session.",
          "Each enquiry begins with understanding what you want to explore and explaining the limits of the practice.",
        ],
      },
      {
        title: "Water Source Exploration",
        paragraphs: [
          "Some people explore dowsing as a traditional method for identifying possible water locations.",
          "Dowsing cannot reliably establish groundwater availability, depth, quality or safety. For actual water-source decisions, use qualified hydrogeological surveys and appropriate testing.",
        ],
      },
      {
        title: "Land, Property and Space",
        paragraphs: [
          "Dowsing may be used by practitioners as a reflective or spiritual activity when exploring land, buildings and personal spaces.",
          "It should not replace structural inspections, environmental assessments, geological surveys or professional property advice.",
        ],
      },
      {
        title: "Personal Energy and Wellness",
        paragraphs: [
          "Some practitioners use dowsing to explore subjective impressions about personal energy, balance and wellbeing.",
          "These impressions are not medical measurements and cannot diagnose disease, identify organ problems or establish the cause of symptoms.",
          "Seek qualified healthcare advice for physical or mental-health concerns.",
        ],
      },
      {
        title: "How a Dowsing Session Works",
        paragraphs: [
          "We begin by discussing your enquiry and clarifying what you would like to explore.",
          "The session then uses the chosen dowsing method as a framework for reflection and personal exploration.",
          "At the end, we discuss your experience and any questions you may have. Conclusions should be considered thoughtfully rather than accepted as verified facts.",
        ],
      },
    ],
  },

  "/services/past-life-regression": {
    title: "Past Life Regression",
    subtitle:
      "A guided exploration of inner experiences, imagery, emotions and consciousness in a supportive setting.",

    sections: [
      {
        title: "Explore the Experiences You Want to Understand",
        paragraphs: [
          "Sometimes we notice recurring patterns, strong emotions, familiar feelings or questions about our lives that we find difficult to explain.",
          "Past Life Regression (PLR) is a guided relaxation and imagery-based practice in which people explore subjective experiences that may arise during a session.",
          "The purpose is to encourage reflection, self-awareness and personal exploration without assuming that the images or experiences are verified memories of past lives.",
        ],
      },
      {
        title: "Repeating Problems in Life",
        paragraphs: [
          "Do you feel that similar situations keep appearing in your life, even when you try to make different choices?",
          "A session can offer space to reflect on your experiences, emotions, expectations and personal interpretations of recurring patterns.",
          "The process does not establish that these patterns originate in a past life.",
        ],
      },
      {
        title: "Relationship Difficulties",
        paragraphs: [
          "Are you curious about strong connections, repeated relationship challenges or emotional reactions that are difficult to understand?",
          "Guided imagery may bring up feelings, memories or symbolic narratives that you can explore at your own pace.",
          "These experiences can be discussed as personal reflections rather than proof of a past-life relationship.",
        ],
      },
      {
        title: "Fears, Phobias and Emotional Triggers",
        paragraphs: [
          "Some people explore regression because they want to reflect on fears, emotional triggers or reactions that feel difficult to explain.",
          "Imagery and relaxation can produce vivid experiences, but a session cannot reliably determine the cause of a fear or phobia.",
          "For persistent distress or symptoms, seek assessment and treatment from an appropriately qualified mental-health professional.",
        ],
      },
      {
        title: "Childhood and Early-Life Experiences",
        paragraphs: [
          "A guided session may bring attention to memories, feelings or imagery associated with childhood and early life.",
          "Memory is reconstructive, and guided suggestion can influence what a person experiences or recalls. Experiences that arise during a session should not automatically be treated as historically accurate memories.",
          "The process should be approached gently, with the participant's comfort, consent and emotional wellbeing as priorities.",
        ],
      },
      {
        title: "Self-Worth and Personal Growth",
        paragraphs: [
          "You may want to explore confidence, self-worth, life direction or the beliefs that shape how you see yourself.",
          "A session can provide an opportunity for reflection and meaning-making around the feelings or imagery that arise.",
          "Any insights should be considered alongside your present-day experiences, relationships, choices and practical circumstances.",
        ],
      },
      {
        title: "Anxiety and Emotional Experiences",
        paragraphs: [
          "You may be curious about recurring emotions, inner conflict or experiences that feel difficult to put into words.",
          "Regression-style imagery can be emotionally vivid for some people. Participation should always be voluntary, and you can pause or stop the process at any time.",
          "PLR is not a substitute for evidence-based mental-health assessment or treatment.",
        ],
      },
      {
        title: "Attachment, Loss and Letting Go",
        paragraphs: [
          "Some people explore guided imagery while reflecting on grief, attachment, change or unresolved feelings.",
          "The session may provide a structured opportunity to reflect on what an experience means to you in the present.",
          "It does not verify supernatural explanations for loss or establish that a relationship continued from another lifetime.",
        ],
      },
      {
        title: "Recurring Dreams and Inner Imagery",
        paragraphs: [
          "Do you experience recurring dreams, vivid imagery or a strong sense of familiarity?",
          "These experiences can be explored as subjective material for reflection and self-understanding.",
          "A dream or image is not, by itself, evidence that a past-life event occurred.",
        ],
      },
      {
        title: "Physical Discomfort and Health Concerns",
        paragraphs: [
          "Some people are curious about emotional meanings they associate with physical discomfort.",
          "PLR cannot identify or establish the cause of physical pain, illness or other symptoms.",
          "Please consult a qualified healthcare professional for assessment and treatment. PLR must not replace medical care or delay necessary treatment.",
        ],
      },
      {
        title: "Spiritual Exploration and Curiosity",
        paragraphs: [
          "You do not need to be facing a particular problem to be curious about regression.",
          "Some people choose to explore consciousness, imagination, personal symbolism and spiritual questions in a guided setting.",
          "You can approach the session with curiosity while remaining open to different interpretations of the experience.",
        ],
      },
      {
        title: "Different Approaches We May Explore",
        paragraphs: [
          "Past Life Regression focuses on imagery and experiences that participants may interpret through the idea of past lives. Such interpretations are not independently verified memories.",
          "Age Regression focuses on imagery or recollections associated with earlier periods of a person's life. Experiences arising during a session may be incomplete or influenced by suggestion.",
          "Womb Regression involves imagery or subjective experiences associated with the prenatal period. Such experiences cannot be assumed to be accurate memories of events before birth.",
          "Inner Child Healing uses reflective exercises and imagery to explore feelings and needs associated with childhood. It should be approached with care and without treating imagery as proof of historical events.",
        ],
      },
      {
        title: "What Happens During a Session?",
        paragraphs: [
          "We begin with a conversation about your goals, expectations and any concerns you would like us to know about.",
          "If you choose to proceed, the session may use relaxation, guided attention and imagery. You remain in control and may pause or stop whenever you wish.",
          "After the experience, we allow time for reflection and discussion. You decide what personal meaning, if any, you take from it.",
          "The process does not require you to believe in past lives, and there is no need to force an image, memory or particular result.",
        ],
      },
      {
        title: "An Important Note About PLR",
        paragraphs: [
          "Past Life Regression is an exploratory practice, not a scientifically established method for recovering verified past-life memories.",
          "Hypnosis and guided imagery can be influenced by expectation, imagination and suggestion. Experiences should not be treated as proof of historical events or used as the sole basis for important life decisions.",
          "PLR cannot diagnose or treat physical or mental-health conditions and is not a substitute for medical care, psychotherapy or other appropriate professional support.",
          "If you have significant psychological distress or concerns about your mental health, please seek guidance from a qualified mental-health professional before deciding whether this practice is appropriate for you.",
        ],
      },
      {
        title: "Begin With a Conversation",
        paragraphs: [
          "If you are curious about Past Life Regression, you can begin with an enquiry to discuss your goals, expectations and questions.",
          "We will explain the session format and help you decide whether it is appropriate for your interests and circumstances.",
          "Your comfort, consent and present-day wellbeing remain the priority throughout the process.",
        ],
      },
    ],
  },

  "/services/chakra-wellness": {
    title: "Chakra Wellness",
    subtitle:
      "Explore chakra-focused practices for meditation, relaxation, self-awareness and personal reflection.",

    sections: [
      {
        title: "Understanding Chakra Wellness",
        paragraphs: [
          "Chakras are part of traditional spiritual frameworks used by many people to reflect on different aspects of their inner experience.",
          "Chakra-focused practices may include meditation, visualization, breath awareness and personal reflection.",
          "These practices should not be understood as medically validated scans or diagnostic tests.",
        ],
      },
      {
        title: "A Practice for Inner Awareness",
        paragraphs: [
          "You may wish to create time for stillness, become more aware of your emotions or develop a regular meditation routine.",
          "Chakra-focused meditation can provide a structured way to direct attention and reflect on your experiences.",
          "The experience is personal, and different people may interpret it differently.",
        ],
      },
      {
        title: "How a Session Works",
        paragraphs: [
          "We discuss your interests and what you would like to explore.",
          "The session may include guided meditation, visualization, relaxation and reflection.",
          "You can ask questions, share your experience and decide which practices, if any, you would like to continue independently.",
        ],
      },
      {
        title: "Important Health Information",
        paragraphs: [
          "Chakra wellness is a complementary spiritual and personal-development practice.",
          "It cannot diagnose disease, scan internal organs or replace medical assessment and treatment.",
          "Please consult a qualified healthcare professional about physical symptoms or mental-health concerns.",
        ],
      },
    ],
  },

  "/services/spiritual-wellness": {
    title: "Spiritual Wellness",
    subtitle:
      "Make space for mindfulness, reflection, inner awareness and personal growth.",

    sections: [
      {
        title: "A Space for Reflection",
        paragraphs: [
          "Spiritual wellness can mean different things to different people. For some, it involves meditation and mindfulness; for others, it includes personal values, meaning, connection or spiritual practice.",
          "Our approach provides a supportive space to reflect on what matters to you and explore practices that fit your own perspective.",
        ],
      },
      {
        title: "Explore Your Inner World",
        paragraphs: [
          "You may be seeking greater clarity, a more regular reflective practice or a way to reconnect with your personal values.",
          "Sessions may include guided reflection, meditation, visualization and discussion.",
          "You do not need to follow a particular belief system to participate.",
        ],
      },
      {
        title: "Personal Growth and Daily Life",
        paragraphs: [
          "Reflection can be most useful when connected with everyday choices, relationships, habits and responsibilities.",
          "We encourage a balanced approach that combines personal insight with practical action and appropriate professional support when needed.",
        ],
      },
    ],
  },

  "/services/meditation": {
    title: "Meditation",
    subtitle:
      "Develop a practical meditation routine using breath, attention, mindfulness and guided visualization.",

    sections: [
      {
        title: "Why Explore Meditation?",
        paragraphs: [
          "Daily responsibilities, constant notifications and competing demands can make it difficult to create time for quiet reflection.",
          "Meditation offers a structured opportunity to practise directing attention, noticing thoughts and returning to the present moment.",
          "People's experiences differ, and meditation is not a guaranteed treatment for any medical or mental-health condition.",
        ],
      },
      {
        title: "Guided Meditation",
        paragraphs: [
          "Guided meditation uses spoken instructions to support attention, relaxation or visualization.",
          "A session may include breath awareness, a body scan, imagery or a period of quiet reflection, depending on your interests.",
        ],
      },
      {
        title: "Building a Regular Practice",
        paragraphs: [
          "A consistent, manageable routine is often more practical than trying to meditate for a long period immediately.",
          "You can begin with short sessions and gradually find a routine that suits your schedule and preferences.",
          "If meditation causes significant distress, stop and seek appropriate professional advice.",
        ],
      },
      {
        title: "How We Can Help",
        paragraphs: [
          "We can discuss your goals, introduce suitable meditation approaches and help you explore a routine that fits your daily life.",
          "The intention is to support practice, self-awareness and reflection rather than promise a specific result.",
        ],
      },
    ],
  },

  "/services/manifestation": {
    title: "Manifestation",
    subtitle:
      "Explore intention, visualization, reflection and focused action as tools for personal development.",

    sections: [
      {
        title: "What Is Manifestation?",
        paragraphs: [
          "Manifestation is often described as the practice of clarifying intentions and using visualization or reflection to stay connected with personal goals.",
          "People may find these exercises useful for considering their priorities, identifying obstacles and maintaining motivation.",
          "Thoughts alone do not guarantee outcomes. Results also depend on circumstances, opportunities, decisions and practical action.",
        ],
      },
      {
        title: "Clarify Your Intentions",
        paragraphs: [
          "Begin by identifying what matters to you and why you want to pursue it.",
          "Translate broad wishes into clear, realistic goals that can guide decisions and daily habits.",
        ],
      },
      {
        title: "Visualization and Action",
        paragraphs: [
          "Visualization can help you imagine a desired outcome and consider the steps required to work toward it.",
          "Combine reflection with practical planning, skill development, consistent effort and a willingness to adapt.",
          "Avoid treating setbacks as proof that you have failed to think positively enough. External circumstances can influence outcomes.",
        ],
      },
      {
        title: "A Balanced Approach",
        paragraphs: [
          "Manifestation practices can be used as personal-development exercises, but they cannot guarantee wealth, health, relationships or success.",
          "Important decisions should also consider reliable information, practical constraints and advice from qualified professionals where appropriate.",
        ],
      },
    ],
  },

  "/services/fingerprint-analysis": {
    title: "Fingerprint Analysis",
    subtitle:
      "Explore fingerprint patterns through an interpretive approach to self-reflection, education and career exploration.",

    sections: [
      {
        title: "Understanding Fingerprint Analysis",
        paragraphs: [
          "Fingerprint Analysis services may use the observation of fingerprint patterns as a framework for discussing personal development, interests and possible areas for exploration.",
          "The interpretations offered in this service are not established scientific assessments of intelligence, personality, talent or future success.",
          "Any profile should be considered one optional prompt for reflection rather than a definitive description of who you are.",
        ],
      },
      {
        title: "Students and Career Exploration",
        paragraphs: [
          "Students and families often have questions about educational choices, learning preferences and possible career directions.",
          "A discussion can help you reflect on interests, existing skills, academic experiences and goals.",
          "Education and career decisions should be based on a broad range of information, including performance, interests, experience and qualified guidance—not fingerprints alone.",
        ],
      },
      {
        title: "Working Professionals and Entrepreneurs",
        paragraphs: [
          "Professionals may wish to reflect on their working style, development goals, strengths and areas they want to improve.",
          "Entrepreneurs may use a session as an opportunity to discuss their goals, decision-making and professional direction.",
          "The discussion is intended to support reflection, not to predict business success or replace professional assessments.",
        ],
      },
      {
        title: "A Lifelong Tool for Personal Growth",
        paragraphs: [
          "Self-understanding is not something that ends after choosing a career.",
          "As your life changes, the same insights can be revisited in the context of education, work, business, relationships, leadership and personal development.",
          "The profile can therefore become one additional tool for continuing self-reflection and growth.",
        ],
      },
      {
        title: "Who Can Benefit?",
        paragraphs: [
          "Students deciding on their stream, course or career direction.",
          "Parents looking for additional insights while supporting their child's educational choices.",
          "Working professionals considering a career change or seeking greater alignment with their strengths.",
          "Business persons and entrepreneurs exploring their working style, strengths, growth areas and professional direction.",
          "Anyone who wants to understand their abilities better and make more conscious choices about their future.",
        ],
      },
      {
        title: "Your Future Should Be Designed With Awareness",
        paragraphs: [
          "You do not have to spend years moving in a direction simply because you started there.",
          "Understand yourself. Recognise your strengths. Identify areas for development. Explore where your abilities may fit. Then build the skills required to move forward.",
          "The goal is not to predict your future. The goal is to help you understand yourself better so that you can participate more consciously in creating it.",
        ],
      },
      {
        title: "An Important Perspective",
        paragraphs: [
          "Fingerprint Analysis is presented as an interpretive personal-development and career-exploration methodology.",
          "The profile should be considered alongside education, academic performance, interests, experience, professional guidance, opportunities and the individual's own goals.",
          "It should not be treated as a medical diagnosis, neurological diagnosis or definitive scientific determination of intelligence, personality or future success.",
          "The final choice about education, career, profession or business always belongs to the individual.",
        ],
      },
    ],
  },
};
