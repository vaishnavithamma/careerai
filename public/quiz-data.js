export const QUIZ_BANK = {
  JavaScript: [
    {
      q: "Which keyword is used to declare a block-scoped variable?",
      options: ["var", "let", "define", "constvar"],
      correct: 1
    },
    {
      q: "Which method converts a JSON string into an object?",
      options: [
        "JSON.stringify()",
        "JSON.parse()",
        "JSON.object()",
        "JSON.convert()"
      ],
      correct: 1
    },
    {
      q: "What is the output type of typeof [] ?",
      options: ["array", "object", "list", "undefined"],
      correct: 1
    },
    {
      q: "Which array method adds an element to the end?",
      options: ["shift()", "push()", "pop()", "concat()"],
      correct: 1
    },
    {
      q: "Which symbol is used for strict equality?",
      options: ["==", "===", "!=", "="],
      correct: 1
    }
  ],

  Python: [
    {
      q: "Which keyword defines a function?",
      options: ["func", "function", "def", "lambda"],
      correct: 2
    },
    {
      q: "Which data type is immutable?",
      options: ["List", "Dictionary", "Set", "Tuple"],
      correct: 3
    },
    {
      q: "Which keyword is used to handle exceptions?",
      options: ["catch", "try", "handle", "exceptonly"],
      correct: 1
    },
    {
      q: "What does len() return?",
      options: [
        "Memory size",
        "Length of object",
        "Index",
        "Type"
      ],
      correct: 1
    },
    {
      q: "Which symbol is used for comments?",
      options: ["//", "#", "/* */", "--"],
      correct: 1
    }
  ],

  React: [
    {
      q: "React is primarily used for?",
      options: [
        "Database",
        "Backend",
        "Building UI",
        "Operating System"
      ],
      correct: 2
    },
    {
      q: "Which hook manages component state?",
      options: [
        "useEffect",
        "useState",
        "useMemo",
        "useRef"
      ],
      correct: 1
    },
    {
      q: "JSX stands for?",
      options: [
        "Java Syntax Extension",
        "JavaScript XML",
        "JSON XML",
        "Java Source XML"
      ],
      correct: 1
    },
    {
      q: "Props are?",
      options: [
        "Immutable inputs",
        "State variables",
        "Functions",
        "Hooks"
      ],
      correct: 0
    },
    {
      q: "Which hook runs side effects?",
      options: [
        "useEffect",
        "useState",
        "useReducer",
        "useContext"
      ],
      correct: 0
    }
  ],

  SQL: [
    {
      q: "Which SQL statement retrieves data?",
      options: ["GET", "SELECT", "FETCH", "READ"],
      correct: 1
    },
    {
      q: "Which clause filters rows?",
      options: ["ORDER BY", "GROUP BY", "WHERE", "LIMIT"],
      correct: 2
    },
    {
      q: "Primary Key must be?",
      options: [
        "Duplicate",
        "Null",
        "Unique",
        "Random"
      ],
      correct: 2
    },
    {
      q: "Which keyword sorts results?",
      options: [
        "GROUP BY",
        "ORDER BY",
        "SORT",
        "ALIGN"
      ],
      correct: 1
    },
    {
      q: "COUNT(*) returns?",
      options: [
        "Columns",
        "Rows",
        "Tables",
        "Indexes"
      ],
      correct: 1
    }
  ],

  "Machine Learning": [
    {
      q: "Which algorithm is supervised?",
      options: [
        "K-Means",
        "Linear Regression",
        "Apriori",
        "PCA"
      ],
      correct: 1
    },
    {
      q: "Overfitting means?",
      options: [
        "Model performs well on training but poorly on new data",
        "Model never learns",
        "Dataset too small",
        "Optimizer failed"
      ],
      correct: 0
    },
    {
      q: "Which library is commonly used for ML in Python?",
      options: [
        "NumPy",
        "Flask",
        "Scikit-learn",
        "Bootstrap"
      ],
      correct: 2
    },
    {
      q: "Classification predicts?",
      options: [
        "Continuous values",
        "Categories",
        "Images only",
        "Clusters"
      ],
      correct: 1
    },
    {
      q: "Which metric is commonly used for classification?",
      options: [
        "Accuracy",
        "RMSE",
        "MAE",
        "MSE"
      ],
      correct: 0
    }
  ],

  Docker: [
    {
      q: "Docker is mainly used for?",
      options: [
        "Virtual Machines",
        "Containerization",
        "Databases",
        "Networking"
      ],
      correct: 1
    },
    {
      q: "Which file defines Docker image instructions?",
      options: [
        "docker.json",
        "Dockerfile",
        "compose.yml",
        "docker.config"
      ],
      correct: 1
    },
    {
      q: "Which command lists running containers?",
      options: [
        "docker images",
        "docker ps",
        "docker list",
        "docker show"
      ],
      correct: 1
    },
    {
      q: "Docker images are?",
      options: [
        "Read-only templates",
        "Running containers",
        "Networks",
        "Volumes"
      ],
      correct: 0
    },
    {
      q: "Which command builds an image?",
      options: [
        "docker create",
        "docker build",
        "docker run",
        "docker init"
      ],
      correct: 1
    }
  ],

  "Node.js": [
    {
      q: "Node.js runs JavaScript on?",
      options: [
        "Browser only",
        "Server",
        "Database",
        "Compiler"
      ],
      correct: 1
    },
    {
      q: "Which package manager comes with Node.js?",
      options: [
        "Composer",
        "npm",
        "Gradle",
        "pip"
      ],
      correct: 1
    },
    {
      q: "Which module creates a web server?",
      options: [
        "http",
        "fs",
        "path",
        "events"
      ],
      correct: 0
    },
    {
      q: "package.json stores?",
      options: [
        "Operating System",
        "Project metadata and dependencies",
        "Database",
        "Compiled code"
      ],
      correct: 1
    },
    {
      q: "Which command installs project dependencies?",
      options: [
        "npm install",
        "npm create",
        "node install",
        "npm init"
      ],
      correct: 0
    }
  ],

  Java: [
    {
      q: "Java code is compiled into?",
      options: [
        "Machine Code",
        "Bytecode",
        "Assembly",
        "Python"
      ],
      correct: 1
    },
    {
      q: "Which keyword creates an object?",
      options: [
        "make",
        "create",
        "new",
        "object"
      ],
      correct: 2
    },
    {
      q: "Which method is the program entry point?",
      options: [
        "run()",
        "main()",
        "start()",
        "execute()"
      ],
      correct: 1
    },
    {
      q: "Java supports?",
      options: [
        "Single inheritance only",
        "Object-Oriented Programming",
        "No classes",
        "Functional only"
      ],
      correct: 1
    },
    {
      q: "Which keyword inherits a class?",
      options: [
        "implements",
        "extends",
        "inherits",
        "using"
      ],
      correct: 1
    }
  ],

  HTML: [
    {
      q: "HTML stands for?",
      options: [
        "HyperText Markup Language",
        "HighText Machine Language",
        "Home Tool Markup Language",
        "Hyper Transfer Markup Language"
      ],
      correct: 0
    },
    {
      q: "Which tag creates a hyperlink?",
      options: ["<link>", "<a>", "<href>", "<url>"],
      correct: 1
    },
    {
      q: "Largest heading tag?",
      options: ["<h6>", "<head>", "<h1>", "<title>"],
      correct: 2
    },
    {
      q: "Which tag inserts an image?",
      options: ["<image>", "<img>", "<picture>", "<src>"],
      correct: 1
    },
    {
      q: "HTML is?",
      options: [
        "Programming language",
        "Markup language",
        "Database",
        "Framework"
      ],
      correct: 1
    }
  ],

  CSS: [
    {
      q: "CSS stands for?",
      options: [
        "Creative Style Sheets",
        "Cascading Style Sheets",
        "Computer Style Sheets",
        "Colorful Style Sheets"
      ],
      correct: 1
    },
    {
      q: "Which property changes text color?",
      options: [
        "font-color",
        "text-color",
        "color",
        "foreground"
      ],
      correct: 2
    },
    {
      q: "Which property changes background?",
      options: [
        "background-color",
        "bg",
        "background-style",
        "fill"
      ],
      correct: 0
    },
    {
      q: "Flexbox is mainly used for?",
      options: [
        "Database",
        "Layout",
        "Animation",
        "Security"
      ],
      correct: 1
    },
    {
      q: "Which selector targets an element with id='box'?",
      options: [".box", "#box", "*box", "&box"],
      correct: 1
    }
  ]
};