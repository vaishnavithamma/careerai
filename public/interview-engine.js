import { QUIZ_BANK } from "./quiz-data.js";

/* ==========================================================
   CAREERINFINITY INTERVIEW ENGINE
   ========================================================== */

function shuffle(array) {
  const arr = [...array];

  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
}

function sample(array, count) {
  return shuffle(array).slice(0, count);
}

function normalize(text = "") {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .trim();
}

function tokenize(text = "") {
  return normalize(text)
    .split(/\s+/)
    .filter(Boolean);
}

/* ==========================================================
   APTITUDE ROUND
   ========================================================== */

export function pickAptitudeQuestions(count = 10) {

  const questions = [];

  Object.entries(QUIZ_BANK).forEach(([category, list]) => {

    list.forEach(q => {

      questions.push({

        category,

        text: q.q,

        options: q.options,

        correct: q.correct,

        explanation:
          "Revise " +
          category +
          " fundamentals to strengthen this topic."

      });

    });

  });

  return sample(questions, count);

}

/* ==========================================================
   TECHNICAL QUESTION BANK
   ========================================================== */

const TECH_BANK = {

Frontend: [

{
type:"concept",
text:"Explain the Virtual DOM in React.",
keywords:["virtual dom","react","diffing","performance"]
},

{
type:"concept",
text:"Difference between let, const and var.",
keywords:["scope","block","hoisting","const"]
},

{
type:"concept",
text:"Explain Event Bubbling.",
keywords:["event","bubbling","propagation"]
},

{
type:"concept",
text:"Difference between Flexbox and CSS Grid.",
keywords:["flexbox","grid","layout"]
},

{
type:"concept",
text:"What are React Hooks?",
keywords:["hooks","useState","useEffect"]
},

{
type:"concept",
text:"Difference between State and Props.",
keywords:["state","props","component"]
},

{
type:"concept",
text:"Explain JSX.",
keywords:["jsx","javascript","xml"]
},

{
type:"concept",
text:"What is Responsive Web Design?",
keywords:["responsive","media","mobile"]
},

{
type:"concept",
text:"Explain useEffect().",
keywords:["useeffect","side effects","react"]
},

{
type:"concept",
text:"Difference between == and ===.",
keywords:["comparison","strict","type"]
}

],

Backend:[

{
type:"concept",
text:"Explain REST API.",
keywords:["rest","http","resource"]
},

{
type:"concept",
text:"Difference between GET and POST.",
keywords:["get","post","http"]
},

{
type:"concept",
text:"Explain Authentication vs Authorization.",
keywords:["authentication","authorization"]
},

{
type:"concept",
text:"Explain JWT.",
keywords:["jwt","token","authentication"]
},

{
type:"concept",
text:"Explain Middleware.",
keywords:["middleware","request","response"]
},

{
type:"concept",
text:"Difference between SQL and NoSQL.",
keywords:["sql","nosql","database"]
},

{
type:"concept",
text:"Explain Database Indexing.",
keywords:["index","database","search"]
},

{
type:"concept",
text:"Explain ACID Properties.",
keywords:["acid","transaction"]
},

{
type:"concept",
text:"Difference between Cookies and Sessions.",
keywords:["cookie","session"]
},

{
type:"concept",
text:"Explain CORS.",
keywords:["cors","origin","browser"]
}

],

FullStack:[

{
type:"concept",
text:"Explain MVC Architecture.",
keywords:["model","view","controller"]
},

{
type:"concept",
text:"Explain CRUD Operations.",
keywords:["create","read","update","delete"]
},

{
type:"concept",
text:"Describe the Request → Response lifecycle.",
keywords:["request","response","server","database"]
},

{
type:"concept",
text:"Explain Environment Variables.",
keywords:["env","security"]
},

{
type:"concept",
text:"Difference between Client-side and Server-side Rendering.",
keywords:["csr","ssr","rendering"]
},

{
type:"concept",
text:"Explain API Integration.",
keywords:["api","fetch","axios"]
},

{
type:"concept",
text:"Explain Authentication Flow.",
keywords:["login","jwt","token"]
},

{
type:"concept",
text:"Explain Deployment Pipeline.",
keywords:["deployment","ci","cd"]
},

{
type:"concept",
text:"Difference between Monolith and Microservices.",
keywords:["microservices","monolith"]
},

{
type:"concept",
text:"Explain Express.js.",
keywords:["express","node","framework"]
}

]

};
/* ==========================================================
   AI / MACHINE LEARNING
   ========================================================== */

Object.assign(TECH_BANK, {

AI_ML:[

{
type:"concept",
text:"Difference between Supervised and Unsupervised Learning.",
keywords:["supervised","unsupervised","training"]
},

{
type:"concept",
text:"Explain Overfitting.",
keywords:["overfitting","generalization","training"]
},

{
type:"concept",
text:"Difference between Classification and Regression.",
keywords:["classification","regression"]
},

{
type:"concept",
text:"Explain Precision and Recall.",
keywords:["precision","recall","f1"]
},

{
type:"concept",
text:"Explain the Confusion Matrix.",
keywords:["true positive","false positive","false negative","true negative"]
},

{
type:"concept",
text:"What is Gradient Descent?",
keywords:["gradient","optimizer","loss"]
},

{
type:"concept",
text:"Difference between CNN and RNN.",
keywords:["cnn","rnn","neural network"]
},

{
type:"concept",
text:"Explain Cross Validation.",
keywords:["cross validation","fold","testing"]
},

{
type:"concept",
text:"What is Feature Engineering?",
keywords:["feature","selection","engineering"]
},

{
type:"concept",
text:"Difference between Bagging and Boosting.",
keywords:["bagging","boosting","ensemble"]
}

],

/* ==========================================================
   PYTHON
   ========================================================== */

Python:[

{
type:"concept",
text:"Difference between List and Tuple.",
keywords:["list","tuple","mutable","immutable"]
},

{
type:"concept",
text:"Explain List Comprehension.",
keywords:["list comprehension","loop"]
},

{
type:"concept",
text:"What are Lambda Functions?",
keywords:["lambda","anonymous"]
},

{
type:"concept",
text:"Explain Decorators.",
keywords:["decorator","wrapper"]
},

{
type:"concept",
text:"Difference between Deep Copy and Shallow Copy.",
keywords:["deep","shallow","copy"]
},

{
type:"concept",
text:"Explain Generators.",
keywords:["yield","generator"]
},

{
type:"concept",
text:"What are Python Modules?",
keywords:["module","import"]
},

{
type:"concept",
text:"Difference between is and ==.",
keywords:["identity","comparison"]
},

{
type:"concept",
text:"Explain Exception Handling.",
keywords:["try","except","finally"]
},

{
type:"concept",
text:"Explain *args and **kwargs.",
keywords:["args","kwargs"]
}

],

/* ==========================================================
   JAVA
   ========================================================== */

Java:[

{
type:"concept",
text:"Explain the four OOP principles.",
keywords:["encapsulation","inheritance","polymorphism","abstraction"]
},

{
type:"concept",
text:"Difference between Interface and Abstract Class.",
keywords:["interface","abstract"]
},

{
type:"concept",
text:"Explain JVM.",
keywords:["jvm","bytecode"]
},

{
type:"concept",
text:"Difference between ArrayList and LinkedList.",
keywords:["arraylist","linkedlist"]
},

{
type:"concept",
text:"Explain Exception Handling.",
keywords:["try","catch","finally"]
},

{
type:"concept",
text:"Difference between HashMap and TreeMap.",
keywords:["hashmap","treemap"]
},

{
type:"concept",
text:"Explain Multithreading.",
keywords:["thread","multithreading"]
},

{
type:"concept",
text:"Difference between JDK, JRE and JVM.",
keywords:["jdk","jre","jvm"]
},

{
type:"concept",
text:"Explain Garbage Collection.",
keywords:["garbage","memory"]
},

{
type:"concept",
text:"Difference between Method Overloading and Overriding.",
keywords:["overloading","overriding"]
}

],

/* ==========================================================
   SQL
   ========================================================== */

SQL:[

{
type:"concept",
text:"Difference between INNER JOIN and LEFT JOIN.",
keywords:["join","inner","left"]
},

{
type:"concept",
text:"Explain Normalization.",
keywords:["normalization","database"]
},

{
type:"concept",
text:"What is a Foreign Key?",
keywords:["foreign key","relationship"]
},

{
type:"concept",
text:"Difference between DELETE, TRUNCATE and DROP.",
keywords:["delete","truncate","drop"]
},

{
type:"concept",
text:"Explain GROUP BY.",
keywords:["group by","aggregate"]
},

{
type:"concept",
text:"Difference between WHERE and HAVING.",
keywords:["where","having"]
},

{
type:"concept",
text:"Explain Indexing.",
keywords:["index","performance"]
},

{
type:"concept",
text:"What are Transactions?",
keywords:["transaction","commit","rollback"]
},

{
type:"concept",
text:"Explain ACID Properties.",
keywords:["acid","transaction"]
},

{
type:"concept",
text:"Difference between Primary Key and Foreign Key.",
keywords:["primary","foreign"]
}

],

/* ==========================================================
   NODE.JS
   ========================================================== */

NodeJS:[

{
type:"concept",
text:"Explain Event Loop.",
keywords:["event loop","callback","async"]
},

{
type:"concept",
text:"Difference between CommonJS and ES Modules.",
keywords:["require","import","export"]
},

{
type:"concept",
text:"Explain package.json.",
keywords:["package","dependencies","scripts"]
},

{
type:"concept",
text:"Explain Express.js Middleware.",
keywords:["middleware","next"]
},

{
type:"concept",
text:"Difference between Blocking and Non-Blocking I/O.",
keywords:["blocking","non blocking"]
},

{
type:"concept",
text:"Explain Streams in Node.js.",
keywords:["stream","buffer"]
},

{
type:"concept",
text:"Explain npm.",
keywords:["npm","package"]
},

{
type:"concept",
text:"Difference between process.nextTick() and setImmediate().",
keywords:["nexttick","setimmediate"]
},

{
type:"concept",
text:"Explain EventEmitter.",
keywords:["eventemitter","events"]
},

{
type:"concept",
text:"Explain Buffers.",
keywords:["buffer","binary"]
}

],

/* ==========================================================
   DOCKER
   ========================================================== */

Docker:[

{
type:"concept",
text:"Difference between Docker Image and Container.",
keywords:["image","container"]
},

{
type:"concept",
text:"Explain Docker Volumes.",
keywords:["volume","storage"]
},

{
type:"concept",
text:"Explain Docker Compose.",
keywords:["compose","services"]
},

{
type:"concept",
text:"Explain Docker Networking.",
keywords:["bridge","network"]
},

{
type:"concept",
text:"What is a Dockerfile?",
keywords:["dockerfile","build"]
},

{
type:"concept",
text:"Difference between CMD and ENTRYPOINT.",
keywords:["cmd","entrypoint"]
},

{
type:"concept",
text:"Explain Docker Layers.",
keywords:["layer","cache"]
},

{
type:"concept",
text:"Explain Bind Mounts.",
keywords:["mount","volume"]
},

{
type:"concept",
text:"What is Docker Hub?",
keywords:["docker hub","registry"]
},

{
type:"concept",
text:"Explain Containerization.",
keywords:["containerization","virtualization"]
}

]

});
/* ==========================================================
   DEVOPS
   ========================================================== */

Object.assign(TECH_BANK, {

DevOps:[

{
type:"concept",
text:"Explain CI/CD Pipeline.",
keywords:["ci","cd","pipeline","automation"]
},

{
type:"concept",
text:"What is Jenkins?",
keywords:["jenkins","automation","pipeline"]
},

{
type:"concept",
text:"Explain Infrastructure as Code.",
keywords:["terraform","iac","automation"]
},

{
type:"concept",
text:"Difference between Docker and Kubernetes.",
keywords:["docker","kubernetes","container"]
},

{
type:"concept",
text:"Explain Kubernetes Pods.",
keywords:["pod","container","cluster"]
},

{
type:"concept",
text:"Explain Rolling Deployment.",
keywords:["rolling","deployment"]
},

{
type:"concept",
text:"Blue-Green Deployment means?",
keywords:["blue","green","deployment"]
},

{
type:"concept",
text:"Explain Git Workflow.",
keywords:["git","branch","merge"]
},

{
type:"concept",
text:"What are Containers?",
keywords:["container","virtualization"]
},

{
type:"concept",
text:"Explain Monitoring in DevOps.",
keywords:["monitoring","grafana","prometheus"]
}

],

Cloud:[

{
type:"concept",
text:"What is AWS EC2?",
keywords:["aws","ec2","virtual machine"]
},

{
type:"concept",
text:"Difference between IaaS, PaaS and SaaS.",
keywords:["iaas","paas","saas"]
},

{
type:"concept",
text:"Explain Load Balancer.",
keywords:["load balancer","traffic"]
},

{
type:"concept",
text:"What is Auto Scaling?",
keywords:["auto scaling","aws"]
},

{
type:"concept",
text:"Explain Cloud Storage.",
keywords:["storage","s3","bucket"]
},

{
type:"concept",
text:"Explain Kubernetes Cluster.",
keywords:["cluster","kubernetes"]
},

{
type:"concept",
text:"Difference between Public and Private Cloud.",
keywords:["public","private","cloud"]
},

{
type:"concept",
text:"What is Virtualization?",
keywords:["virtualization","hypervisor"]
},

{
type:"concept",
text:"Explain Availability Zone.",
keywords:["availability","zone","region"]
},

{
type:"concept",
text:"Difference between Containers and VMs.",
keywords:["container","virtual machine"]
}

],

DataScience:[

{
type:"concept",
text:"Difference between Pandas and NumPy.",
keywords:["pandas","numpy"]
},

{
type:"concept",
text:"Explain Data Cleaning.",
keywords:["cleaning","missing","duplicates"]
},

{
type:"concept",
text:"What is Feature Scaling?",
keywords:["normalization","standardization"]
},

{
type:"concept",
text:"Explain Data Visualization.",
keywords:["matplotlib","seaborn","plot"]
},

{
type:"concept",
text:"Difference between Mean, Median and Mode.",
keywords:["mean","median","mode"]
},

{
type:"concept",
text:"Explain Outlier Detection.",
keywords:["outlier","iqr"]
},

{
type:"concept",
text:"Explain Correlation.",
keywords:["correlation"]
},

{
type:"concept",
text:"Difference between Structured and Unstructured Data.",
keywords:["structured","unstructured"]
},

{
type:"concept",
text:"Explain Exploratory Data Analysis.",
keywords:["eda","analysis"]
},

{
type:"concept",
text:"What is Feature Selection?",
keywords:["feature","selection"]
}

],

CyberSecurity:[

{
type:"concept",
text:"Explain SQL Injection.",
keywords:["sql","injection","security"]
},

{
type:"concept",
text:"Difference between Authentication and Authorization.",
keywords:["authentication","authorization"]
},

{
type:"concept",
text:"Explain Cross Site Scripting.",
keywords:["xss","cross site"]
},

{
type:"concept",
text:"What is CSRF?",
keywords:["csrf"]
},

{
type:"concept",
text:"Explain Firewalls.",
keywords:["firewall","network"]
},

{
type:"concept",
text:"Explain VPN.",
keywords:["vpn","security"]
},

{
type:"concept",
text:"What is Encryption?",
keywords:["encryption","cipher"]
},

{
type:"concept",
text:"Difference between Symmetric and Asymmetric Encryption.",
keywords:["symmetric","asymmetric"]
},

{
type:"concept",
text:"Explain Digital Signature.",
keywords:["digital","signature"]
},

{
type:"concept",
text:"Explain Hashing.",
keywords:["hash","sha","md5"]
}

]

});


/* ==========================================================
   ROLE DETECTION
   ========================================================== */

function detectCategory(topJob){

if(!topJob){
return "Frontend";
}

const title=(topJob.title||"").toLowerCase();

if(title.includes("frontend")) return "Frontend";

if(title.includes("backend")) return "Backend";

if(title.includes("full")) return "FullStack";

if(title.includes("ai")) return "AI_ML";

if(title.includes("ml")) return "AI_ML";

if(title.includes("machine")) return "AI_ML";

if(title.includes("data scientist")) return "DataScience";

if(title.includes("data analyst")) return "DataScience";

if(title.includes("cloud")) return "Cloud";

if(title.includes("devops")) return "DevOps";

if(title.includes("security")) return "CyberSecurity";

if(title.includes("cyber")) return "CyberSecurity";

if(title.includes("java")) return "Java";

if(title.includes("python")) return "Python";

if(title.includes("mobile")) return "Frontend";

return "Frontend";

}


/* ==========================================================
   PICK TECHNICAL QUESTIONS
   ========================================================== */

export function pickTechnicalQuestions(topJob,count=10){

const category=detectCategory(topJob);

let bank=[...(TECH_BANK[category]||[])];

if(bank.length<count){

Object.values(TECH_BANK).forEach(list=>{

if(bank.length<count){

bank.push(...shuffle(list).slice(0,2));

}

});

}

bank=shuffle(bank);

return{

category,

questions:bank.slice(0,count)

};

}
/* ==========================================================
   HR QUESTION BANK
   ========================================================== */

const HR_BANK = [

{
text:"Tell me about yourself.",
keywords:["education","skills","projects","career","experience"]
},

{
text:"Why should we hire you?",
keywords:["skills","team","learning","value","problem solving"]
},

{
text:"What are your strengths?",
keywords:["strength","communication","leadership","teamwork"]
},

{
text:"What is your biggest weakness?",
keywords:["weakness","improve","learning","feedback"]
},

{
text:"Where do you see yourself in five years?",
keywords:["career","growth","learning","goals"]
},

{
text:"Tell me about a challenging project.",
keywords:["project","challenge","solution","result"]
},

{
text:"Describe a conflict you resolved.",
keywords:["conflict","communication","resolution"]
},

{
text:"Describe a leadership experience.",
keywords:["leadership","initiative","team"]
},

{
text:"How do you handle deadlines?",
keywords:["deadline","planning","priority","time"]
},

{
text:"How do you handle pressure?",
keywords:["pressure","planning","calm"]
},

{
text:"Tell me about a failure.",
keywords:["failure","learning","improvement"]
},

{
text:"Why do you want to join this company?",
keywords:["company","growth","learning","culture"]
},

{
text:"Describe your ideal work environment.",
keywords:["team","learning","culture"]
},

{
text:"How do you prioritize multiple tasks?",
keywords:["priority","planning","deadline"]
},

{
text:"Tell me about teamwork.",
keywords:["team","communication","collaboration"]
},

{
text:"How do you keep your skills updated?",
keywords:["courses","learning","projects","practice"]
},

{
text:"Describe a difficult decision you made.",
keywords:["decision","analysis","result"]
},

{
text:"What motivates you?",
keywords:["learning","challenge","impact"]
},

{
text:"How do you react to criticism?",
keywords:["feedback","improvement","learning"]
},

{
text:"Describe a time you exceeded expectations.",
keywords:["initiative","extra","achievement"]
},

{
text:"What makes you different from other candidates?",
keywords:["skills","projects","value"]
},

{
text:"Tell me about a time you worked under pressure.",
keywords:["pressure","deadline","planning"]
},

{
text:"How do you manage disagreements in a team?",
keywords:["team","communication","resolution"]
},

{
text:"Do you prefer working alone or in a team?",
keywords:["team","individual","balance"]
},

{
text:"Do you have any questions for us?",
keywords:["company","team","growth"]

}

];


/* ==========================================================
   HR ROUND
   ========================================================== */

export function pickHrQuestions(count=10){

return shuffle(HR_BANK).slice(0,count);

}


/* ==========================================================
   STAR METHOD DETECTION
   ========================================================== */

function detectSTAR(answer){

const text=normalize(answer);

return{

situation:
text.includes("situation")||
text.includes("project")||
text.includes("during"),

task:
text.includes("task")||
text.includes("responsibility"),

action:
text.includes("implemented")||
text.includes("created")||
text.includes("developed")||
text.includes("designed")||
text.includes("worked")||
text.includes("used"),

result:
text.includes("result")||
text.includes("improved")||
text.includes("success")||
text.includes("completed")||
text.includes("achieved")

};

}


/* ==========================================================
   COMMUNICATION SCORE
   ========================================================== */

function communicationScore(answer){

const words=tokenize(answer);

let score=0;

if(words.length>=15) score+=0.2;

if(words.length>=30) score+=0.2;

if(words.length>=50) score+=0.2;

const sentences=answer
.split(/[.!?]/)
.filter(Boolean);

if(sentences.length>=2)
score+=0.2;

if(
answer.includes(",")||
answer.includes(".")
)
score+=0.2;

return Math.min(score,1);

}


/* ==========================================================
   KEYWORD MATCH
   ========================================================== */

function keywordMatch(answer,keywords){

const text=normalize(answer);

const matched=[];
const missed=[];

keywords.forEach(k=>{

const key=normalize(k);

if(text.includes(key)){

matched.push(k);

}else{

missed.push(k);

}

});

return{

matched,
missed,
ratio:
keywords.length
?
matched.length/keywords.length
:
1

};

}
/* ==========================================================
   TECHNICAL ANSWER EVALUATION
   ========================================================== */

export function evaluateKeywordAnswer(question, answer = "") {

  const text = normalize(answer);

  const words = tokenize(answer);

  const keywordResult = keywordMatch(
    answer,
    question.keywords || []
  );

  const keywordScore = keywordResult.ratio;

  const communication = communicationScore(answer);

  let score =
    keywordScore * 0.75 +
    communication * 0.25;

  score = Math.min(1, score);

  let grade = "Needs Improvement";

  if (score >= 0.85) grade = "Excellent";
  else if (score >= 0.70) grade = "Very Good";
  else if (score >= 0.50) grade = "Good";

  let feedback = "";

  if (keywordResult.missed.length === 0) {

    feedback =
      "Excellent answer. You covered every important point.";

  } else {

    feedback =
      "Try mentioning: " +
      keywordResult.missed.join(", ");

  }

  return {

    score,

    percentage: Math.round(score * 100),

    grade,

    feedback,

    matchedKeywords: keywordResult.matched,

    missedKeywords: keywordResult.missed,

    communicationScore: Math.round(communication * 100),

    keywordScore: Math.round(keywordScore * 100),

    wordCount: words.length

  };

}


/* ==========================================================
   HR ANSWER EVALUATION
   ========================================================== */

export function evaluateHrAnswer(question, answer = "") {

  const star = detectSTAR(answer);

  const keywordResult = keywordMatch(
    answer,
    question.keywords || []
  );

  const communication = communicationScore(answer);

  let starScore = 0;

  if (star.situation) starScore += 0.25;
  if (star.task) starScore += 0.25;
  if (star.action) starScore += 0.25;
  if (star.result) starScore += 0.25;

  const keywordScore = keywordResult.ratio;

  let score =
    keywordScore * 0.40 +
    starScore * 0.35 +
    communication * 0.25;

  score = Math.min(score, 1);

  let confidence = "Low";

  if (score >= 0.80)
    confidence = "High";
  else if (score >= 0.60)
    confidence = "Medium";

  const strengths = [];

  if (communication >= 0.70)
    strengths.push("Clear communication");

  if (star.action)
    strengths.push("Explained actions");

  if (star.result)
    strengths.push("Mentioned outcomes");

  if (keywordResult.matched.length >= 3)
    strengths.push("Relevant content");

  const improvements = [];

  if (!star.situation)
    improvements.push("Describe the situation.");

  if (!star.task)
    improvements.push("Explain your responsibility.");

  if (!star.action)
    improvements.push("Describe what you actually did.");

  if (!star.result)
    improvements.push("Mention measurable results.");

  if (keywordResult.missed.length > 0) {

    improvements.push(
      "Include: " +
      keywordResult.missed.join(", ")
    );

  }

  return {

    score,

    percentage: Math.round(score * 100),

    confidence,

    communicationScore: Math.round(
      communication * 100
    ),

    keywordScore: Math.round(
      keywordScore * 100
    ),

    starScore: Math.round(
      starScore * 100
    ),

    matchedKeywords: keywordResult.matched,

    missedKeywords: keywordResult.missed,

    strengths,

    improvements

  };

}


/* ==========================================================
   EXTRA HELPERS
   ========================================================== */

export function shuffleQuestions(list) {

  return shuffle(list);

}

export function getInterviewSummary(results = []) {

  if (!results.length) {

    return {

      average: 0,

      highest: 0,

      lowest: 0,

      recommendation:
        "No interview data available."

    };

  }

  const percentages = results.map(r => r.percentage || 0);

  const total =
    percentages.reduce((a, b) => a + b, 0);

  const average =
    Math.round(total / percentages.length);

  const highest =
    Math.max(...percentages);

  const lowest =
    Math.min(...percentages);

  let recommendation =
    "Needs more preparation.";

  if (average >= 85)
    recommendation =
      "Excellent interview performance.";

  else if (average >= 70)
    recommendation =
      "Strong performance with minor improvements.";

  else if (average >= 55)
    recommendation =
      "Average performance. Practice technical explanations.";

  return {

    average,

    highest,

    lowest,

    recommendation

  };

}