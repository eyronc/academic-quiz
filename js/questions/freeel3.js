const freeel3Questions = [
  {
    q: "What must be done with real-world data before computer algorithms can be applied for analysis?",
    a: [
      { option: "It must be uploaded to the cloud", whyWrong: "Cloud storage is unrelated to the fundamental requirement for algorithmic processing." },
      { option: "It must be represented into a data structure", whyRight: "Real-world data must be represented into a data structure so that computer algorithms can be applied for analysis. This is the foundational first step in any data processing pipeline." },
      { option: "It must be converted to audio format", whyWrong: "Audio conversion applies only to specific unstructured data types, not a general prerequisite." },
      { option: "It must be printed as a report", whyWrong: "Printing is an output step, not preparation for algorithmic analysis." }
    ]
  },
  {
    q: "What is a data matrix?",
    a: [
      { option: "A 3D visual model of a dataset", whyWrong: "Data matrices are strictly two-dimensional (rows × columns)." },
      { option: "A common representation of data in rows and columns", whyRight: "A data matrix is the standard tabular representation where rows are observations and columns are variables." },
      { option: "A Python library for visualization", whyWrong: "Visualization is handled by matplotlib/seaborn; a data matrix is a data structure." },
      { option: "A type of database index", whyWrong: "Database indexes optimize queries; they are not the same as a data matrix." }
    ]
  },
  {
    q: "In a data matrix, what does each row represent?",
    a: [
      { option: "A variable or characteristic", whyWrong: "Variables/characteristics are represented by columns." },
      { option: "A single observation in the dataset", whyRight: "Each row corresponds to one complete observation/record in the dataset." },
      { option: "A data type classification", whyWrong: "Data types describe columns, not rows." },
      { option: "A summary statistic", whyWrong: "Summary statistics are derived values, not the raw rows themselves." }
    ]
  },
  {
    q: "In a data matrix, what does each column represent?",
    a: [
      { option: "A single observation", whyWrong: "Observations are rows." },
      { option: "A variable representing a characteristic of each observation", whyRight: "Each column holds one variable/characteristic measured across all observations." },
      { option: "A unique identifier only", whyWrong: "Columns can hold any variable; an ID column is just one possible example." },
      { option: "A row label", whyWrong: "Row labels (the index) are separate from the column data." }
    ]
  },
  {
    q: "What does pandas derive its name from?",
    a: [
      { option: "Python Advanced Numerical Data Analysis System", whyWrong: "This is a made-up acronym." },
      { option: "Panel data", whyRight: "Pandas is short for 'panel data', an econometrics term for multi-dimensional tabular data." },
      { option: "Parallel Data Streams", whyWrong: "Not the origin of the name." },
      { option: "Python Automated Numeric Data Analysis Suite", whyWrong: "Incorrect backronym." }
    ]
  },
  {
    q: "What type of data is pandas primarily designed to handle?",
    a: [
      { option: "Audio and video files", whyWrong: "Pandas focuses on structured tabular data." },
      { option: "Tabular data represented as vectors and matrices", whyRight: "Pandas is built specifically for tabular data in vector/matrix form." },
      { option: "Graph-based relationship data", whyWrong: "Graph data uses libraries like NetworkX." },
      { option: "Natural language text only", whyWrong: "Pandas can store text but is not specialized for NLP." }
    ]
  },
  {
    q: "Which Python library is used for data visualization and works seamlessly with pandas?",
    a: [
      { option: "NumPy", whyWrong: "NumPy is for numerical operations." },
      { option: "SciPy", whyWrong: "SciPy is for advanced mathematics." },
      { option: "matplotlib", whyRight: "matplotlib (and seaborn) provides plotting that integrates directly with pandas DataFrames/Series." },
      { option: "scikit-learn", whyWrong: "scikit-learn is for machine learning." }
    ]
  },
  {
    q: "Which library provides optimized basic math operations and works with pandas?",
    a: [
      { option: "seaborn", whyWrong: "seaborn is visualization." },
      { option: "matplotlib", whyWrong: "matplotlib is visualization." },
      { option: "NumPy", whyRight: "NumPy supplies the fast array operations that pandas builds upon." },
      { option: "scikit-learn", whyWrong: "scikit-learn is machine learning." }
    ]
  },
  {
    q: "What is scikit-learn used for in the Python data science ecosystem?",
    a: [
      { option: "Data visualization", whyWrong: "Visualization is matplotlib/seaborn." },
      { option: "Advanced math functions", whyWrong: "Advanced math is SciPy." },
      { option: "Machine learning", whyRight: "scikit-learn provides algorithms for predictive modeling and works natively with pandas." },
      { option: "Database connectivity", whyWrong: "Database access is handled by SQLAlchemy or similar." }
    ]
  },
  {
    q: "What is the primary pandas data structure?",
    a: [
      { option: "Series", whyWrong: "Series is 1D; DataFrame is the central 2D structure." },
      { option: "DataFrame", whyRight: "The DataFrame is the primary pandas data structure — a 2D labeled tabular object." },
      { option: "ndarray", whyWrong: "ndarray is from NumPy; pandas wraps it." },
      { option: "Dictionary", whyWrong: "Dictionaries can create DataFrames but are not the primary structure." }
    ]
  },
  {
    q: "How many dimensions does a pandas DataFrame have?",
    a: [
      { option: "One-dimensional", whyWrong: "1D is a Series." },
      { option: "Three-dimensional", whyWrong: "Higher dimensions require other structures (e.g., xarray)." },
      { option: "Two-dimensional", whyRight: "DataFrames are explicitly two-dimensional (rows and columns)." },
      { option: "Zero-dimensional", whyWrong: "0D is a scalar." }
    ]
  },
  {
    q: "What does 'size-mutable' mean for a DataFrame?",
    a: [
      { option: "The values inside cannot be changed", whyWrong: "Values can be changed; size-mutable refers to shape." },
      { option: "The DataFrame can grow or shrink — rows/columns can be added or removed", whyRight: "Size-mutable means the dimensions can change after creation." },
      { option: "The DataFrame has a fixed maximum size", whyWrong: "No fixed limit." },
      { option: "The DataFrame can only hold numeric data", whyWrong: "DataFrames are heterogeneous." }
    ]
  },
  {
    q: "What does 'potentially heterogeneous' mean for a DataFrame?",
    a: [
      { option: "All columns must have the same data type", whyWrong: "That would be homogeneous." },
      { option: "Different columns can contain different data types", whyRight: "Columns can mix integers, strings, floats, booleans, etc., in the same DataFrame." },
      { option: "The DataFrame can only store text data", whyWrong: "Any mix of types is allowed." },
      { option: "The DataFrame must have equal numbers of rows and columns", whyWrong: "Shape is independent of heterogeneity." }
    ]
  },
  {
    q: "A DataFrame can be thought of as a dict-like container for what objects?",
    a: [
      { option: "NumPy arrays", whyWrong: "NumPy is the underlying engine, but the public view is Series." },
      { option: "Series objects", whyRight: "Each column of a DataFrame is a Series sharing the same index." },
      { option: "Scalar values", whyWrong: "Scalars are single values." },
      { option: "Lists of lists", whyWrong: "Construction input, not the internal structure." }
    ]
  },
  {
    q: "Which of the following correctly creates a DataFrame in pandas?",
    a: [
      { option: "pd.Series({'Name': ['Mark', 'Jane']})", whyWrong: "Series is 1D." },
      { option: "pd.DataFrame({'Name': ['Mark', 'Jane', 'Bob'], 'Age': [20, 22, 21]})", whyRight: "Dictionary of equal-length lists is the standard way to build a DataFrame." },
      { option: "pd.ndarray({'Name': ['Mark', 'Jane']})", whyWrong: "ndarray is NumPy, not pandas." },
      { option: "pd.Table({'Name': ['Mark', 'Jane']})", whyWrong: "No such constructor; use DataFrame." }
    ]
  },
  {
    q: "What is a pandas Series?",
    a: [
      { option: "A two-dimensional table with rows and columns", whyWrong: "That describes a DataFrame." },
      { option: "A one-dimensional ndarray with axis labels", whyRight: "A Series is a labeled 1D array supporting integer and label indexing." },
      { option: "A collection of DataFrames", whyWrong: "No." },
      { option: "A dictionary of key-value pairs with no ordering", whyWrong: "Series maintains order and supports duplicate labels." }
    ]
  },
  {
    q: "Do labels (index values) in a pandas Series need to be unique?",
    a: [
      { option: "Yes, all labels must be unique", whyWrong: "Uniqueness is not required." },
      { option: "No, labels do not need to be unique", whyRight: "Duplicate index values are allowed in a Series." },
      { option: "Only the first label must be unique", whyWrong: "No such rule." },
      { option: "Labels are not allowed in Series", whyWrong: "Labels are a core feature." }
    ]
  },
  {
    q: "What types of indexing does a pandas Series support?",
    a: [
      { option: "Only integer-based indexing", whyWrong: "Both integer and label indexing are supported." },
      { option: "Only label-based indexing", whyWrong: "Both are supported." },
      { option: "Both integer- and label-based indexing", whyRight: "Flexible access via position or label." },
      { option: "Neither integer nor label-based indexing", whyWrong: "Indexing is fundamental." }
    ]
  },
  {
    q: "Which of the following correctly creates a pandas Series?",
    a: [
      { option: "pd.DataFrame(['Mark', 'Jane', 'Bob'], name='Name')", whyWrong: "DataFrame is 2D." },
      { option: "pd.Series(['Mark', 'Jane', 'Bob'], name='Name')", whyRight: "The standard constructor for a named 1D Series." },
      { option: "pd.Array(['Mark', 'Jane', 'Bob'], name='Name')", whyWrong: "pd.Array is not the primary constructor." },
      { option: "pd.Column(['Mark', 'Jane', 'Bob'], name='Name')", whyWrong: "No such function." }
    ]
  },
  {
    q: "A DataFrame is described as a combination of multiple what?",
    a: [
      { option: "DataFrames", whyWrong: "No." },
      { option: "Series", whyRight: "A DataFrame is literally multiple Series objects aligned on a shared index." },
      { option: "Scalars", whyWrong: "No." },
      { option: "Lists", whyWrong: "Lists are construction helpers." }
    ]
  },
  {
    q: "What happens when you apply a scalar operation to a pandas Series?",
    a: [
      { option: "The operation is applied only to the first element", whyWrong: "Element-wise across the entire Series." },
      { option: "The operation is applied to each member of the Series", whyRight: "Scalar operations broadcast to every element." },
      { option: "The operation is ignored unless the Series has numbers", whyWrong: "Works on appropriate dtypes." },
      { option: "The Series is converted to a scalar value", whyWrong: "Result is a new Series." }
    ]
  },
  {
    q: "What is the result of applying 'Age > 20' on an Age Series [20, 22, 21, 18, 19, 17]?",
    a: [
      { option: "A single True or False value", whyWrong: "Element-wise Boolean Series." },
      { option: "A Boolean Series [False, True, True, False, False, False]", whyRight: "Correct element-wise comparison." },
      { option: "The numeric values that are greater than 20", whyWrong: "That would require boolean indexing afterward." },
      { option: "An error because you cannot compare a Series to a scalar", whyWrong: "Comparison is fully supported." }
    ]
  },
  {
    q: "When applying an operation between two Series, how is it performed?",
    a: [
      { option: "Only on the first elements of each Series", whyWrong: "Full element-wise with alignment." },
      { option: "Element-wise, aligning values based on their index", whyRight: "Operations align on index labels automatically." },
      { option: "On the sum of all elements in each Series", whyWrong: "No aggregation by default." },
      { option: "By concatenating the two Series together", whyWrong: "Concatenation is a different operation." }
    ]
  },
  {
    q: "Do two Series need to be the same length to perform operations between them?",
    a: [
      { option: "Yes, they must always be the same length", whyWrong: "Index alignment handles different lengths." },
      { option: "No, operations align values based on index values", whyRight: "Misaligned positions become NaN." },
      { option: "Only if both Series are numeric", whyWrong: "Alignment works for any dtype." },
      { option: "Yes, but only for division operations", whyWrong: "All operations use alignment." }
    ]
  },
  {
    q: "Given Dist = [1, 4, 3, 0.2, 10] and Time = [2, 2, 3, 2, 1], what is Dist / Time element-wise?",
    a: [
      { option: "[2, 8, 9, 0.4, 10]", whyWrong: "That is multiplication." },
      { option: "[0.5, 2.0, 1.0, 0.1, 10.0]", whyRight: "Correct element-wise division after index alignment." },
      { option: "[1.5, 2.0, 0.0, 1.8, 9.0]", whyWrong: "Incorrect arithmetic." },
      { option: "[3, 6, 6, 2.2, 11]", whyWrong: "That is addition." }
    ]
  },
  {
    q: "How can you quickly view documentation for a pandas function in Jupyter Notebook?",
    a: [
      { option: "By using the help() function only", whyWrong: "help() works but is slower." },
      { option: "By using ? before the function name, e.g. ?pd.read_csv", whyRight: "The ? operator displays rich inline documentation instantly." },
      { option: "By pressing Ctrl+D on the function name", whyWrong: "Not the Jupyter shortcut." },
      { option: "By importing the docs module", whyWrong: "No such module." }
    ]
  },
  {
    q: "Which of the following is listed as a basic pandas DataFrame operation?",
    a: [
      { option: "Compiling code", whyWrong: "Language-level, not pandas." },
      { option: "Select Columns", whyRight: "One of the core basic operations shown in the slides." },
      { option: "Render HTML", whyWrong: "Not a pandas data op." },
      { option: "Deploy to server", whyWrong: "Not a pandas operation." }
    ]
  },
  {
    q: "Which of the following is NOT listed as a basic pandas operation?",
    a: [
      { option: "Filter Rows", whyWrong: "It is listed." },
      { option: "Sort Rows", whyWrong: "It is listed." },
      { option: "Aggregate Data", whyWrong: "It is listed." },
      { option: "Train a Machine Learning Model", whyRight: "ML training is scikit-learn, not a basic pandas operation." }
    ]
  },
  {
    q: "What does the 'Group by Variable' operation in pandas allow you to do?",
    a: [
      { option: "Sort the DataFrame alphabetically", whyWrong: "Sorting is separate." },
      { option: "Split data into groups based on a variable's values and apply operations per group", whyRight: "Groupby splits, applies functions, and combines results." },
      { option: "Rename the columns of a DataFrame", whyWrong: "Renaming is df.rename()." },
      { option: "Filter rows based on a condition", whyWrong: "Filtering uses boolean indexing or query()." }
    ]
  },
  {
    q: "In the example dataset, what variable type would 'Section' (S17, S18) be classified as?",
    a: [
      { option: "Continuous numerical", whyWrong: "No numeric range." },
      { option: "Discrete numerical", whyWrong: "Not countable numbers." },
      { option: "Categorical — Nominal", whyRight: "Distinct categories with no inherent order." },
      { option: "Categorical — Ordinal", whyWrong: "No meaningful ranking." }
    ]
  },
  {
    q: "In the example dataset, what variable type would a CCPROG1 grade (3.0, 1.0, 3.5) be classified as?",
    a: [
      { option: "Categorical — Nominal", whyWrong: "Grades have magnitude." },
      { option: "Categorical — Ordinal", whyWrong: "Grades are measured quantities, not just ranks." },
      { option: "Numerical — Continuous", whyRight: "Grades can take any value in a range (decimals allowed)." },
      { option: "Numerical — Discrete", whyWrong: "Decimals make it continuous." }
    ]
  },
  {
    q: "Which library in the pandas ecosystem is specifically for advanced math functions?",
    a: [
      { option: "matplotlib", whyWrong: "Visualization." },
      { option: "NumPy", whyWrong: "Basic math." },
      { option: "seaborn", whyWrong: "Visualization." },
      { option: "SciPy", whyRight: "SciPy provides advanced mathematical and scientific functions." }
    ]
  },
  {
    q: "According to the slides, what percentage of a data scientist's time is typically spent on data preparation?",
    a: [
      { option: "20%", whyWrong: "That's the analysis/complaining part." },
      { option: "80%", whyRight: "80% of time is spent preparing (cleaning) data, 20% complaining about needing to prepare it." },
      { option: "50%", whyWrong: "Not the figure given." },
      { option: "10%", whyWrong: "Far too low." }
    ]
  },
  {
    q: "Raw data is described as inherently 'dirty'. Which of the following is NOT listed as a common issue?",
    a: [
      { option: "Spelling/encoding errors", whyWrong: "It is listed." },
      { option: "Incorrect data types", whyWrong: "It is listed." },
      { option: "Missing values", whyWrong: "It is listed." },
      { option: "Perfectly formatted JSON", whyRight: "Perfect formatting is not a problem; the slides list problems only." }
    ]
  },
  {
    q: "In the 'Noisy Data' table example, which row shows an age that is clearly impossible for a human?",
    a: [
      { option: "Row with Age = 10 and Income = 5,000", whyWrong: "Possible but young." },
      { option: "Row with Age = 200", whyRight: "Age 200 is impossible — classic noisy/outlier data." },
      { option: "Row with Sex = '*1U'", whyWrong: "Invalid category but not age." },
      { option: "Row with Income = -100,000,000", whyWrong: "Negative income is suspicious but age 200 is more obviously noisy." }
    ]
  },
  {
    q: "When data comes from multiple separate files collected at different times, which pandas functions are recommended to combine them?",
    a: [
      { option: "concat() and merge()", whyRight: "Explicitly stated for combining separate files/sources." },
      { option: "read_csv() only", whyWrong: "Reading is first step; combining needs concat/merge." },
      { option: "drop_duplicates()", whyWrong: "For deduplication after combining." },
      { option: "fillna()", whyWrong: "For missing values." }
    ]
  },
  {
    q: "What is the recommended first step when you suspect multiple representations of the same categorical value (e.g., 'M', 'Male', 'mALe')?",
    a: [
      { option: "Use the unique() function", whyRight: "unique() quickly reveals all distinct strings present." },
      { option: "Use fillna()", whyWrong: "For missing values." },
      { option: "Use drop_duplicates()", whyWrong: "For entire rows." },
      { option: "Use query()", whyWrong: "For row selection." }
    ]
  },
  {
    q: "To fix multiple representations of a categorical column like Sex, which pandas method(s) are suggested for standardizing values?",
    a: [
      { option: "map() or apply()", whyRight: "Both are explicitly recommended for remapping categorical levels." },
      { option: "astype()", whyWrong: "For type conversion." },
      { option: "to_numeric()", whyWrong: "For numeric conversion." },
      { option: "dropna()", whyWrong: "For removing missing." }
    ]
  },
  {
    q: "Numerical values stored as text strings (e.g., '4', '5') indicate what common data cleaning issue?",
    a: [
      { option: "Incorrect data type", whyRight: "Classic incorrect data type problem shown in the slides." },
      { option: "Multiple representations", whyWrong: "That is text variation." },
      { option: "Duplicate rows", whyWrong: "Different issue." },
      { option: "Inconsistent date format", whyWrong: "Dates are separate." }
    ]
  },
  {
    q: "Which function should you call first to diagnose incorrect data types across all columns?",
    a: [
      { option: "df.info()", whyRight: "info() shows dtype of every column." },
      { option: "df.unique()", whyWrong: "Per column only." },
      { option: "df.head()", whyWrong: "Shows values but not types." },
      { option: "df.describe()", whyWrong: "Summary stats only for numeric." }
    ]
  },
  {
    q: "To convert string numbers to proper numeric type, which pandas functions are recommended?",
    a: [
      { option: "astype() or to_numeric()", whyRight: "Explicitly listed for fixing incorrect numeric types." },
      { option: "map() only", whyWrong: "map() can work but not the primary recommendation." },
      { option: "fillna()", whyWrong: "For missing." },
      { option: "drop_duplicates()", whyWrong: "For rows." }
    ]
  },
  {
    q: "What should you do with a default placeholder like 'N/A' or 9999 that actually means missing?",
    a: [
      { option: "Replace it with NaN/None", whyRight: "Pandas uses NaN/None for true missing values." },
      { option: "Leave it as is", whyWrong: "It will confuse analysis." },
      { option: "Convert to string", whyWrong: "Worsens the issue." },
      { option: "Drop the column", whyWrong: "Not always necessary." }
    ]
  },
  {
    q: "In pandas, how are genuine missing values represented?",
    a: [
      { option: "NaN or None", whyRight: "Standard representation shown in all missing-data slides." },
      { option: "'N/A' string", whyWrong: "That is a default placeholder." },
      { option: "9999", whyWrong: "Common sentinel value." },
      { option: "Empty string ''", whyWrong: "Not the pandas standard." }
    ]
  },
  {
    q: "When handling missing data, the slides emphasize that the best strategy depends on what?",
    a: [
      { option: "The domain and your own judgment", whyRight: "Explicitly stated: 'Handling missing data depends on the domain. Use your own judgment.'" },
      { option: "Always dropping rows", whyWrong: "One option only." },
      { option: "Always replacing with mean", whyWrong: "One possible scheme." },
      { option: "Never touching the data", whyWrong: "Not recommended." }
    ]
  },
  {
    q: "What does df.dropna() do by default?",
    a: [
      { option: "Removes rows containing any missing values", whyRight: "Standard behavior for cleaning." },
      { option: "Replaces missing with 0", whyWrong: "That is fillna(0)." },
      { option: "Fills with column mean", whyWrong: "Requires fillna() with strategy." },
      { option: "Does nothing", whyWrong: "It does remove." }
    ]
  },
  {
    q: "If a dataset contains exact duplicate rows, which function removes them?",
    a: [
      { option: "drop_duplicates()", whyRight: "Explicitly recommended for duplicate rows." },
      { option: "dropna()", whyWrong: "For missing." },
      { option: "unique()", whyWrong: "Returns unique values, does not modify DF." },
      { option: "query()", whyWrong: "For selection." }
    ]
  },
  {
    q: "Dates recorded as 'Jun 20 2018', '6/20/2018', '20 June 18', etc., illustrate which cleaning problem?",
    a: [
      { option: "Inconsistent format", whyRight: "Exact example given in the slides." },
      { option: "Incorrect data type", whyWrong: "They are strings but the issue is format variation." },
      { option: "Duplicate data", whyWrong: "No." },
      { option: "Missing data", whyWrong: "No." }
    ]
  },
  {
    q: "What does the inplace=False parameter do in pandas methods like drop() or rename()?",
    a: [
      { option: "Returns a new DataFrame with changes; original is unchanged", whyRight: "Default behavior shown in diagrams." },
      { option: "Modifies the original object directly", whyWrong: "That is inplace=True." },
      { option: "Deletes the DataFrame", whyWrong: "No." },
      { option: "Prints a message", whyWrong: "No." }
    ]
  },
  {
    q: "What does setting inplace=True do?",
    a: [
      { option: "Modifies the original DataFrame in place; no new object returned", whyRight: "Clear diagram in slides." },
      { option: "Returns a copy", whyWrong: "Opposite." },
      { option: "Only works on Series", whyWrong: "Works on both." },
      { option: "Is the default", whyWrong: "False is default." }
    ]
  },
  {
    q: "Which of the following methods supports the inplace parameter according to the slides?",
    a: [
      { option: "drop, dropna, rename, sort_values, set_index", whyRight: "All explicitly listed." },
      { option: "Only read_csv", whyWrong: "No." },
      { option: "Only query", whyWrong: "query does not modify." },
      { option: "Only fillna", whyWrong: "fillna also supports it, but the list is broader." }
    ]
  },
  {
    q: "What is the purpose of the query() method in pandas?",
    a: [
      { option: "To write complex Boolean conditions for selecting rows using a string expression", whyRight: "Exact description from slides." },
      { option: "To rename columns", whyWrong: "No." },
      { option: "To fill missing values", whyWrong: "No." },
      { option: "To group data", whyWrong: "groupby() is separate." }
    ]
  },
  {
    q: "What rows does df.query('CCPROG1 >= 3.5') return from the example dataset?",
    a: [
      { option: "Rows with index 2 and 4 (grades 3.5 and 4.0)", whyRight: "Matches the highlighted rows in the slide example." },
      { option: "All rows", whyWrong: "No." },
      { option: "Only row 0", whyWrong: "No." },
      { option: "Rows where Section == 'S17'", whyWrong: "Different condition." }
    ]
  },
  {
    q: "What rows does df.query(\"Section == 'S17'\") return?",
    a: [
      { option: "Rows 0, 2, 3", whyRight: "Exact slide example." },
      { option: "Rows 1, 4, 5", whyWrong: "Those are S18." },
      { option: "Only row 2", whyWrong: "No." },
      { option: "Empty DataFrame", whyWrong: "No." }
    ]
  },
  {
    q: "What does df.query('CCPROG1 >= 3.5 and Section == \"S17\"') select?",
    a: [
      { option: "Only row 2", whyRight: "Both conditions must be true — only the 3.5 in S17." },
      { option: "Rows 2 and 4", whyWrong: "Row 4 is S18." },
      { option: "All S17 rows", whyWrong: "Ignores grade condition." },
      { option: "Nothing", whyWrong: "No." }
    ]
  },
  {
    q: "What rows does df.query('index > 2') return?",
    a: [
      { option: "Rows with index 3, 4, 5", whyRight: "Slide example highlights exactly those rows." },
      { option: "Rows 0, 1, 2", whyWrong: "Opposite." },
      { option: "All rows", whyWrong: "No." },
      { option: "Only row 0", whyWrong: "No." }
    ]
  },
  {
    q: "What does df.query('CCPROG1 > CCPROG2') return from the example grades dataset?",
    a: [
      { option: "Rows 0 and 3", whyRight: "3.0>1.0 and 2.5>1.0; other rows fail or have None." },
      { option: "All rows", whyWrong: "No." },
      { option: "Rows where CCPROG1 == 4.0", whyWrong: "No." },
      { option: "Empty", whyWrong: "No." }
    ]
  },
  {
    q: "What are two common reasons for missing values in real datasets?",
    a: [
      { option: "Error in data collection or sensor failure", whyRight: "Slides list error, privacy/refusal, interruptions/failure in sensors." },
      { option: "Data was intentionally perfect", whyWrong: "Opposite." },
      { option: "All values were entered twice", whyWrong: "Duplicate issue." },
      { option: "Dates were formatted correctly", whyWrong: "Not related." }
    ]
  },
  {
    q: "What is imputation?",
    a: [
      { option: "Estimating/replacing missing values based on existing data", whyRight: "Exact definition given." },
      { option: "Deleting all rows with missing values", whyWrong: "That is dropping." },
      { option: "Converting to categorical", whyWrong: "No." },
      { option: "Scaling features", whyWrong: "Different preprocessing step." }
    ]
  },
  {
    q: "Which pandas method is used for imputation (replacing missing values)?",
    a: [
      { option: "fillna()", whyRight: "Explicitly stated in the imputation slides." },
      { option: "dropna()", whyWrong: "Removes instead of filling." },
      { option: "query()", whyWrong: "Selection." },
      { option: "astype()", whyWrong: "Type conversion." }
    ]
  },
  {
    q: "In numerical imputation, what statistic is typically used to estimate a missing age value?",
    a: [
      { option: "Median or mean of the other ages", whyRight: "Slides recommend median/average for numerical imputation." },
      { option: "Mode", whyWrong: "Mode is for categorical." },
      { option: "Minimum value", whyWrong: "No." },
      { option: "Zero", whyWrong: "Not recommended." }
    ]
  },
  {
    q: "For categorical imputation (e.g., missing 'smoker' status), what value is recommended if 95% of records are 'non-smoker'?",
    a: [
      { option: "The mode (most frequent value)", whyRight: "Explicit example in slides." },
      { option: "Mean", whyWrong: "Mean is numeric." },
      { option: "Median", whyWrong: "Numeric." },
      { option: "Random choice", whyWrong: "Not the standard approach shown." }
    ]
  },
  {
    q: "What does binning do?",
    a: [
      { option: "Groups data into a series of categories (bins)", whyRight: "Exact definition from the binning slide." },
      { option: "Removes outliers", whyWrong: "Outlier detection is separate." },
      { option: "Scales features to 0-1", whyWrong: "Feature scaling." },
      { option: "Creates dummy variables", whyWrong: "One-hot encoding." }
    ]
  },
  {
    q: "How many types of binning are mentioned in the slides?",
    a: [
      { option: "Two — numerical and categorical", whyRight: "Explicitly stated." },
      { option: "One", whyWrong: "No." },
      { option: "Three", whyWrong: "No." },
      { option: "Four", whyWrong: "No." }
    ]
  },
  {
    q: "Which of the following is a listed data preprocessing technique?",
    a: [
      { option: "One Hot Encoding", whyRight: "In the full preprocessing list on slide 17." },
      { option: "Compiling Python code", whyWrong: "Not preprocessing." },
      { option: "Printing reports", whyWrong: "No." },
      { option: "Uploading to cloud", whyWrong: "No." }
    ]
  },
  {
    q: "Which preprocessing technique converts categorical variables into binary columns?",
    a: [
      { option: "One Hot Encoding", whyRight: "Standard name and purpose in the list." },
      { option: "Log Transformation", whyWrong: "For numeric skew." },
      { option: "Feature Scaling", whyWrong: "Normalizes numeric range." },
      { option: "Aggregation", whyWrong: "Summarizes groups." }
    ]
  },

];