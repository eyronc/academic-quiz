const infosecQuestions = [
  {
    q: "What does CIA stand for in information security?",
    a: [
      { option: "Central Intelligence Agency", whyWrong: "This is the US intelligence agency, not InfoSec principles." },
      { option: "Confidentiality, Integrity, Availability", whyRight: "CIA in InfoSec refers to the three core principles: Confidentiality protects data from unauthorized access, Integrity ensures data accuracy, and Availability guarantees system accessibility." },
      { option: "Computer Information Access", whyWrong: "Not a recognized InfoSec term or framework." },
      { option: "Certified Information Assurance", whyWrong: "Sounds official but does not represent CIA principles in InfoSec." }
    ]
  },
  {
    q: "Which attack involves sending excessive requests to crash a system?",
    a: [
      { option: "Phishing", whyWrong: "Phishing uses fake emails to steal credentials, it does not crash systems with traffic." },
      { option: "DoS Attack", whyRight: "DoS (Denial of Service) overwhelms a system with massive traffic or requests, exhausting resources and making it unavailable to legitimate users." },
      { option: "SQL Injection", whyWrong: "Exploits database vulnerabilities to access/modify data, not flood systems with requests." },
      { option: "Man-in-the-Middle", whyWrong: "Intercepts communications between parties, does not crash systems with excessive requests." }
    ]
  },
  {
    q: "What is the primary purpose of encryption?",
    a: [
      { option: "Speed up data transfer", whyWrong: "Encryption adds computational overhead, actually slowing down transfers." },
      { option: "Protect confidentiality", whyRight: "Encryption converts data into unreadable format, ensuring only authorized parties with the decryption key can access it." },
      { option: "Increase storage space", whyWrong: "Encryption slightly increases file size due to padding, does not save storage space." },
      { option: "Delete viruses", whyWrong: "Antivirus software removes malware, encryption has no effect on viruses." }
    ]
  },
  {
    q: "Which is NOT a type of malware?",
    a: [
      { option: "Virus", whyWrong: "Viruses ARE malware that attach to files and spread when executed." },
      { option: "Worm", whyWrong: "Worms ARE malware that self-replicate across networks autonomously." },
      { option: "Firewall", whyRight: "Firewalls are security tools that filter network traffic - they protect against malware, they're not malicious themselves." },
      { option: "Trojan", whyWrong: "Trojans ARE malware disguised as legitimate software." }
    ]
  },
  {
    q: "What does a firewall primarily do?",
    a: [
      { option: "Scans for viruses", whyWrong: "Antivirus software handles scanning for malicious code patterns." },
      { option: "Filters network traffic", whyRight: "Firewalls inspect network packets and enforce rules to allow or block traffic based on IP, ports, and protocols." },
      { option: "Encrypts all data", whyWrong: "Encryption tools (VPNs, TLS) handle data encryption, not firewalls." },
      { option: "Creates backups", whyWrong: "Backup software saves data copies, completely unrelated to firewall function." }
    ]
  },
  {
    q: "Social engineering primarily targets:",
    a: [
      { option: "Hardware", whyWrong: "Physical attacks target hardware; social engineering manipulates people." },
      { option: "Software", whyWrong: "Technical exploits target software; social engineering exploits human psychology." },
      { option: "Human users", whyRight: "Social engineering manipulates humans psychologically to reveal sensitive info or perform actions that compromise security." },
      { option: "Network cables", whyWrong: "Physical tampering targets cables; social engineering focuses on human manipulation." }
    ]
  },
  {
    q: "What is phishing?",
    a: [
      { option: "Network scanning tool", whyWrong: "Tools like Nmap scan networks; phishing is a social engineering attack." },
      { option: "Deceptive emails to steal credentials", whyRight: "Phishing uses fake emails or websites that appear legitimate to trick users into revealing passwords, credit cards, or sensitive data." },
      { option: "Type of virus", whyWrong: "Phishing is social engineering, not self-replicating malware." },
      { option: "Firewall misconfiguration", whyWrong: "Configuration errors are technical issues, not deceptive social attacks." }
    ]
  },
  {
    q: "VPN stands for:",
    a: [
      { option: "Very Private Network", whyWrong: "Incorrect expansion; 'Virtual' indicates logical network overlay." },
      { option: "Virtual Private Network", whyRight: "VPN creates an encrypted tunnel over the internet, allowing secure remote access to private networks using public infrastructure." },
      { option: "Verified Protection Network", whyWrong: "Not a standard networking term or recognized acronym." },
      { option: "Visual Privacy Node", whyWrong: "Not related to VPN technology or networking concepts." }
    ]
  },
  {
    q: "Two-factor authentication (2FA) requires:",
    a: [
      { option: "Two passwords", whyWrong: "Using two passwords is still single-factor (both are 'something you know')." },
      { option: "Two different types of credentials", whyRight: "2FA requires two different authentication factor types: knowledge (password), possession (phone/token), or inherence (biometric)." },
      { option: "Two computers", whyWrong: "Number of devices is unrelated to authentication factors." },
      { option: "Two antivirus programs", whyWrong: "Antivirus software is completely unrelated to authentication methods." }
    ]
  },
  {
    q: "What is ransomware?",
    a: [
      { option: "Free security software", whyWrong: "Ransomware is malicious software that harms victims, not legitimate security tools." },
      { option: "Malware that encrypts files for ransom", whyRight: "Ransomware encrypts victim's files and demands payment (ransom) for the decryption key." },
      { option: "Type of firewall", whyWrong: "Firewalls filter traffic; ransomware is malware that holds data hostage." },
      { option: "Automated backup tool", whyWrong: "Backup tools protect data; ransomware threatens and encrypts it for extortion." }
    ]
  },
  {
    q: "The principle of least privilege means:",
    a: [
      { option: "Everyone gets admin rights", whyWrong: "This violates least privilege by giving excessive permissions." },
      { option: "Users get only the access they need", whyRight: "Least privilege grants users only the minimum access rights necessary for their job, limiting damage from compromised accounts." },
      { option: "No one gets any access", whyWrong: "Users need appropriate access to work; least privilege balances security with functionality." },
      { option: "Maximum permissions for all", whyWrong: "This is the opposite of least privilege and creates major security risks." }
    ]
  },
  {
    q: "What does IDS stand for?",
    a: [
      { option: "Internet Data Service", whyWrong: "Not a standard security term or system." },
      { option: "Intrusion Detection System", whyRight: "IDS monitors network traffic and system activities to detect suspicious behavior or policy violations, alerting administrators." },
      { option: "Internal Defense System", whyWrong: "While security-related, this is not what IDS stands for." },
      { option: "Information Distribution Service", whyWrong: "This relates to data sharing, not security monitoring." }
    ]
  },
  {
    q: "A strong password should include:",
    a: [
      { option: "Only lowercase letters", whyWrong: "Single character type makes passwords weak and easily cracked." },
      { option: "Mix of uppercase, lowercase, numbers, symbols", whyRight: "Complexity through character variety increases entropy and resists brute force attacks." },
      { option: "Birthdate and name", whyWrong: "Personal information is easily guessed through social engineering or research." },
      { option: "Common dictionary words", whyWrong: "Dictionary attacks quickly crack passwords using common words." }
    ]
  },
  {
    q: "What is shoulder surfing?",
    a: [
      { option: "Following someone in traffic", whyWrong: "This is stalking or physical surveillance, not the InfoSec term." },
      { option: "Watching someone's screen or keyboard", whyRight: "Shoulder surfing is physically observing screens, keyboards, or documents to steal passwords or sensitive information." },
      { option: "Tracking online activity", whyWrong: "This is digital surveillance or monitoring, not physical observation." },
      { option: "Reading someone's email", whyWrong: "This is unauthorized access or hacking, not shoulder surfing." }
    ]
  },
  {
    q: "SSL/TLS certificates are mainly used to provide:",
    a: [
      { option: "Virus scanning", whyWrong: "Antivirus software scans for malware, not certificates." },
      { option: "Encrypted communication", whyRight: "SSL/TLS certificates enable encrypted HTTPS connections between browsers and servers, protecting data in transit with the padlock icon." },
      { option: "Local file backup", whyWrong: "Backup tools save data copies, unrelated to certificates." },
      { option: "Password management", whyWrong: "Password managers store credentials, certificates authenticate and encrypt connections." }
    ]
  },
  {
    q: "Biometric authentication relies on:",
    a: [
      { option: "Passwords and PINs", whyWrong: "These are knowledge factors ('something you know'), not biometric." },
      { option: "Physical or behavioral characteristics", whyRight: "Biometrics use unique traits like fingerprint, face, iris, or typing rhythm - 'something you are' factors." },
      { option: "Security questions", whyWrong: "Knowledge-based authentication, not physical/behavioral characteristics." },
      { option: "One-time codes", whyWrong: "These are possession factors ('something you have'), not biometric." }
    ]
  },
  {
    q: "What is a botnet?",
    a: [
      { option: "Antivirus software", whyWrong: "Antivirus protects systems; botnets are malicious networks." },
      { option: "Network of compromised computers", whyRight: "Botnets are networks of infected machines (bots/zombies) controlled by attackers for DDoS, spam, or crypto mining." },
      { option: "Type of firewall", whyWrong: "Firewalls filter traffic; botnets are compromised computer networks." },
      { option: "Secure file storage", whyWrong: "Storage protects data; botnets exploit infected systems for attacks." }
    ]
  },
  {
    q: "Patch management primarily involves:",
    a: [
      { option: "Replacing hardware", whyWrong: "Hardware replacement is maintenance, not software patching." },
      { option: "Updating software to fix vulnerabilities", whyRight: "Patch management applies software updates that fix security vulnerabilities and bugs to prevent exploitation." },
      { option: "Installing new cables", whyWrong: "Physical infrastructure work is unrelated to software patching." },
      { option: "Changing passwords monthly", whyWrong: "Password policies are separate security practices from patch management." }
    ]
  },
  {
    q: "Spear phishing is best described as:",
    a: [
      { option: "Random mass emails", whyWrong: "This describes generic phishing campaigns, not targeted spear phishing." },
      { option: "Highly targeted phishing attack", whyRight: "Spear phishing targets specific individuals with personalized emails containing researched details for higher credibility." },
      { option: "Phishing via phone only", whyWrong: "This is 'vishing' (voice phishing), not spear phishing which uses email." },
      { option: "Hardware-based attack", whyWrong: "Spear phishing is social engineering via email, not physical hardware exploitation." }
    ]
  },
  {
    q: "The main goal of information security is to:",
    a: [
      { option: "Make systems run faster", whyWrong: "Performance optimization is an IT goal, not a primary security objective." },
      { option: "Protect information assets", whyRight: "InfoSec protects confidentiality, integrity, and availability (CIA triad) of information assets against threats." },
      { option: "Reduce IT budget", whyWrong: "Cost reduction is financial management, not a security goal." },
      { option: "Increase disk space", whyWrong: "Storage expansion is infrastructure management, not security." }
    ]
  },
  {
    q: "Which property is violated when data is changed by an unauthorized party?",
    a: [
      { option: "Confidentiality", whyWrong: "Confidentiality is violated when unauthorized parties VIEW data, not change it." },
      { option: "Integrity", whyRight: "Integrity ensures data remains accurate and unmodified; unauthorized changes compromise integrity." },
      { option: "Availability", whyWrong: "Availability is violated when systems become inaccessible, not when data is modified." },
      { option: "Authenticity", whyWrong: "While related, the specific CIA property for unauthorized data changes is integrity." }
    ]
  },
  {
    q: "A DDoS attack primarily affects which CIA property?",
    a: [
      { option: "Confidentiality", whyWrong: "DDoS doesn't steal or expose data, it makes systems unavailable." },
      { option: "Integrity", whyWrong: "DDoS doesn't modify data, it floods systems to cause unavailability." },
      { option: "Availability", whyRight: "DDoS overwhelms systems with traffic, making them unavailable to legitimate users, directly impacting Availability." },
      { option: "All three", whyWrong: "DDoS specifically targets availability through resource exhaustion, not confidentiality or integrity." }
    ]
  },
  {
    q: "Stuxnet is best known for primarily attacking:",
    a: [
      { option: "Web servers", whyWrong: "Stuxnet targeted industrial control systems, not web infrastructure." },
      { option: "Industrial control systems", whyRight: "Stuxnet targeted SCADA systems controlling industrial processes, specifically Iranian nuclear centrifuges, demonstrating cyber-physical attacks." },
      { option: "Mobile phones", whyWrong: "Stuxnet was designed for industrial systems, not mobile platforms." },
      { option: "Email accounts", whyWrong: "Stuxnet attacked physical infrastructure controls, not email systems." }
    ]
  },
  {
    q: "Which is an example of social engineering?",
    a: [
      { option: "Buffer overflow", whyWrong: "This is a technical memory exploitation attack, not social engineering." },
      { option: "Dumpster diving", whyRight: "Dumpster diving searches trash for sensitive documents, exploiting human carelessness rather than technical vulnerabilities." },
      { option: "SQL injection", whyWrong: "This is a code injection attack on databases, not human manipulation." },
      { option: "Packet sniffing", whyWrong: "This is network traffic interception, not social engineering." }
    ]
  },
  {
    q: "What does a man-in-the-middle attack usually target?",
    a: [
      { option: "Availability", whyWrong: "MITM focuses on interception and modification, not making systems unavailable." },
      { option: "Confidentiality & Integrity", whyRight: "MITM intercepts communications allowing eavesdropping (violates confidentiality) and potentially modifying messages (violates integrity)." },
      { option: "Only integrity", whyWrong: "MITM also violates confidentiality through eavesdropping, not just integrity." },
      { option: "Only availability", whyWrong: "MITM doesn't primarily affect availability; it intercepts and alters communications." }
    ]
  },
  {
    q: "Malware that spreads without user interaction is called a:",
    a: [
      { option: "Virus", whyWrong: "Viruses need host files and user execution (opening infected files) to spread." },
      { option: "Trojan", whyWrong: "Trojans disguise themselves but don't self-replicate automatically." },
      { option: "Worm", whyRight: "Worms self-replicate and spread across networks autonomously without user action, exploiting vulnerabilities automatically." },
      { option: "Rootkit", whyWrong: "Rootkits hide malware presence but don't focus on self-replication." }
    ]
  },
  {
    q: "Which is typically used to achieve confidentiality?",
    a: [
      { option: "Hashing", whyWrong: "Hashing creates fixed-size outputs for integrity verification, not confidentiality." },
      { option: "Digital signature", whyWrong: "Digital signatures verify authenticity and integrity using asymmetric crypto, not confidentiality." },
      { option: "Symmetric encryption", whyRight: "Symmetric encryption (like AES) scrambles data to protect confidentiality, requiring a secret key to decrypt." },
      { option: "Checksum", whyWrong: "Checksums detect data corruption (integrity), not protect confidentiality." }
    ]
  },
  {
    q: "A logic bomb is triggered by:",
    a: [
      { option: "Network traffic", whyWrong: "Logic bombs activate on programmed conditions, not network activity patterns." },
      { option: "Specific condition or event", whyRight: "Logic bombs are malicious code that activates when specific conditions are met (date, time, user action, deleted account)." },
      { option: "User login", whyWrong: "While login could be a trigger, logic bombs can have various specific programmed conditions." },
      { option: "Antivirus scan", whyWrong: "Logic bombs typically hide from scans and activate on predetermined conditions." }
    ]
  },
  {
    q: "What does DLP stand for?",
    a: [
      { option: "Data Loss Prevention", whyRight: "DLP systems monitor and control data transfers to prevent sensitive information from leaving the organization unauthorized." },
      { option: "Disk Logging Protocol", whyWrong: "Not a standard security term or data protection system." },
      { option: "Direct Link Protection", whyWrong: "Not related to DLP or data security terminology." },
      { option: "Data Load Protection", whyWrong: "Not the meaning of DLP in security contexts." }
    ]
  },
  {
    q: "Endpoint Detection and Response (EDR) focuses on:",
    a: [
      { option: "Network perimeter", whyWrong: "Firewalls and network security focus on perimeter; EDR focuses on endpoints." },
      { option: "Individual devices", whyRight: "EDR monitors endpoints (computers, mobile devices) for threats, providing visibility and enabling rapid incident response." },
      { option: "Cloud storage", whyWrong: "Cloud security solutions handle cloud storage; EDR monitors endpoint devices." },
      { option: "Email filtering", whyWrong: "Email security gateways filter emails; EDR monitors endpoint behavior." }
    ]
  },
  {
    q: "SIEM systems are primarily used for:",
    a: [
      { option: "Real-time traffic blocking", whyWrong: "Firewalls and IPS block traffic; SIEM analyzes and correlates security events." },
      { option: "Log collection and correlation", whyRight: "SIEM aggregates logs from multiple sources, correlates events to detect patterns, and provides centralized monitoring." },
      { option: "Password storage", whyWrong: "Password managers store credentials; SIEM collects and analyzes security logs." },
      { option: "File encryption", whyWrong: "Encryption tools protect data; SIEM monitors security events and logs." }
    ]
  },
  {
    q: "Which is a physical security threat?",
    a: [
      { option: "Phishing email", whyWrong: "This is a cyber threat using social engineering, not physical." },
      { option: "Power outage", whyRight: "Power outages threaten availability through physical infrastructure failure, requiring physical security measures like UPS." },
      { option: "SQL injection", whyWrong: "This is a code injection cyber attack, not a physical threat." },
      { option: "Cross-site scripting", whyWrong: "This is a web application vulnerability, not physical security." }
    ]
  },
  {
    q: "Zero-day vulnerability refers to:",
    a: [
      { option: "Known but unpatched flaw", whyWrong: "Known flaws are not zero-days; they're known vulnerabilities awaiting patches." },
      { option: "Flaw with no patch available yet", whyRight: "Zero-day vulnerabilities are unknown to the vendor with no available patch, exploitable before developers have time to fix." },
      { option: "Flaw known for zero days", whyWrong: "The 'zero days' refers to no time to patch, not duration of knowledge." },
      { option: "Publicly disclosed flaw", whyWrong: "Public disclosure means it's known; zero-days are unknown to vendors." }
    ]
  },
  {
    q: "Which is NOT a strong authentication method?",
    a: [
      { option: "Biometrics + PIN", whyWrong: "Combines 'something you are' (biometric) with 'something you know' (PIN) - strong 2FA." },
      { option: "Password + security question", whyRight: "Both are 'something you know' (single factor). Strong 2FA requires two different factor types." },
      { option: "Fingerprint + OTP", whyWrong: "Combines 'something you are' (fingerprint) with 'something you have' (OTP device) - strong 2FA." },
      { option: "Smart card + PIN", whyWrong: "Combines 'something you have' (card) with 'something you know' (PIN) - strong 2FA." }
    ]
  },
  {
    q: "What does MFA stand for?",
    a: [
      { option: "Multi-Factor Authentication", whyRight: "MFA requires two or more authentication factors for stronger security, extending beyond simple 2FA." },
      { option: "Multiple Firewall Access", whyWrong: "Not a standard security term; MFA relates to authentication, not firewalls." },
      { option: "Managed File Access", whyWrong: "File access control is separate from MFA authentication mechanisms." },
      { option: "Multi-Factor Analysis", whyWrong: "MFA is about authentication security, not data analysis." }
    ]
  },
  {
    q: "A rootkit is dangerous because it:",
    a: [
      { option: "Encrypts files", whyWrong: "Ransomware encrypts files; rootkits focus on hiding malware presence." },
      { option: "Hides malicious processes", whyRight: "Rootkits modify the OS to conceal malware, hiding processes, files, and network connections from security tools." },
      { option: "Steals passwords only", whyWrong: "Keyloggers steal passwords; rootkits hide various types of malware." },
      { option: "Slows down the system", whyWrong: "While possible, rootkits primarily hide threats, not degrade performance." }
    ]
  },
  {
    q: "Which protocol is commonly used for secure email?",
    a: [
      { option: "HTTP", whyWrong: "This is a web protocol, not for email security or encryption." },
      { option: "SMTP", whyWrong: "SMTP transmits email but doesn't encrypt it; needs S/MIME or PGP for security." },
      { option: "S/MIME or PGP", whyRight: "S/MIME and PGP encrypt and digitally sign emails for confidentiality and authenticity." },
      { option: "FTP", whyWrong: "This transfers files, not related to email security or encryption." }
    ]
  },
  {
    q: "What is the main purpose of a honeypot?",
    a: [
      { option: "Store backups", whyWrong: "Backup systems store data copies; honeypots are decoys for threat intelligence." },
      { option: "Attract and study attackers", whyRight: "Honeypots are decoy systems designed to lure attackers, allowing security teams to study attack methods safely." },
      { option: "Block malware", whyWrong: "Antivirus and firewalls block threats; honeypots attract and study attackers." },
      { option: "Encrypt traffic", whyWrong: "Encryption tools protect data; honeypots lure attackers for analysis." }
    ]
  },
  {
    q: "Which attack exploits weak session management?",
    a: [
      { option: "Session hijacking", whyRight: "Session hijacking steals or predicts session tokens due to weak session ID generation, unencrypted transmission, or lack of timeout." },
      { option: "Buffer overflow", whyWrong: "This exploits memory vulnerabilities in code, not session management." },
      { option: "Phishing", whyWrong: "This is social engineering to steal credentials, not exploit session tokens." },
      { option: "Brute force", whyWrong: "This guesses credentials through repeated attempts, not hijacking sessions." }
    ]
  },
  {
    q: "OWASP is best known for publishing:",
    a: [
      { option: "Top 10 web application risks", whyRight: "OWASP publishes the Top 10 list of most critical web application security risks for developers." },
      { option: "Linux security guide", whyWrong: "While OWASP creates security resources, they're famous for the Top 10, not Linux guides." },
      { option: "Windows patch list", whyWrong: "Microsoft publishes Windows patches; OWASP focuses on web security." },
      { option: "Firewall rules", whyWrong: "Vendors provide firewall configs; OWASP publishes web application risks." }
    ]
  },
  {
    q: "Which is a common insider threat?",
    a: [
      { option: "Ransomware", whyWrong: "This is external malware, not an insider threat from authorized personnel." },
      { option: "Data leakage by employee", whyRight: "Insider threats come from employees/contractors who misuse authorized access; data leakage is common." },
      { option: "DDoS from botnet", whyWrong: "This is an external attack from compromised machines, not insiders." },
      { option: "SQL injection", whyWrong: "This is an external code injection attack, not insider misuse of access." }
    ]
  },
  {
    q: "What is tailgating in physical security?",
    a: [
      { option: "Following someone through a secured door", whyRight: "Tailgating (piggybacking) is following an authorized person through a door without proper authentication." },
      { option: "Watching over shoulder", whyWrong: "This is shoulder surfing, not tailgating through doors." },
      { option: "Stealing USB drives", whyWrong: "This is theft of physical media, not the access control bypass of tailgating." },
      { option: "Installing keyloggers", whyWrong: "This is malware installation, not physical access control bypass." }
    ]
  },
  {
    q: "Which control helps prevent data exfiltration?",
    a: [
      { option: "DLP solution", whyRight: "Data Loss Prevention tools monitor, detect, and block attempts to copy or transmit sensitive data outside the organization." },
      { option: "Antivirus", whyWrong: "Detects and removes malware, not specifically prevents data exfiltration." },
      { option: "Firewall rule", whyWrong: "While firewalls can block some traffic, DLP specifically monitors data content for exfiltration." },
      { option: "Password policy", whyWrong: "Enforces credential strength, not prevents data exfiltration." }
    ]
  },
  {
    q: "A SYN flood is a type of:",
    a: [
      { option: "Application layer attack", whyWrong: "SYN flood targets the network/transport layer, not application layer." },
      { option: "DoS attack", whyRight: "SYN flood exploits TCP handshake by sending many SYN requests without completing connections, exhausting server resources." },
      { option: "Man-in-the-middle", whyWrong: "MITM intercepts communications; SYN flood overwhelms systems with requests." },
      { option: "Password attack", whyWrong: "SYN flood exhausts resources, not attempts to guess passwords." }
    ]
  },
  {
    q: "Which is the weakest link in most security programs?",
    a: [
      { option: "Firewalls", whyWrong: "Technical controls that work reliably when configured correctly." },
      { option: "Encryption algorithms", whyWrong: "Modern algorithms like AES are mathematically strong and reliable." },
      { option: "Humans", whyRight: "Humans are the weakest link due to social engineering vulnerability, poor password practices, and mistakes." },
      { option: "Antivirus software", whyWrong: "While not perfect, AV is a technical control more reliable than human behavior." }
    ]
  },
  {
    q: "What does UEBA stand for?",
    a: [
      { option: "User and Entity Behavior Analytics", whyRight: "UEBA uses machine learning to establish behavior baselines and detect anomalies indicating compromised accounts." },
      { option: "Unified Endpoint Backup Agent", whyWrong: "Not a standard security term; UEBA is about behavior analysis." },
      { option: "Universal Encryption Basic Algorithm", whyWrong: "UEBA relates to behavioral analytics, not encryption." },
      { option: "User Event Based Alerting", whyWrong: "While related to events, UEBA specifically means behavior analytics." }
    ]
  },
  {
    q: "Which is a form of passive reconnaissance?",
    a: [
      { option: "SQL injection", whyWrong: "This is active exploitation that directly attacks databases." },
      { option: "Port scanning", whyRight: "Port scanning is passive reconnaissance, gathering information without triggering alarms or directly attacking." },
      { option: "Social engineering", whyWrong: "This actively manipulates people, not passive information gathering." },
      { option: "Brute force login", whyWrong: "This actively attempts authentication, leaving obvious traces." }
    ]
  },
  {
    q: "ISO/IEC 27001 is a standard for:",
    a: [
      { option: "Penetration testing", whyWrong: "PTES and other frameworks cover pen testing; ISO 27001 is for ISMS." },
      { option: "Information Security Management System", whyRight: "ISO/IEC 27001 specifies requirements for establishing, implementing, and maintaining an ISMS." },
      { option: "Network cabling", whyWrong: "ISO/IEC 11801 covers cabling; ISO 27001 is for security management." },
      { option: "Cloud computing", whyWrong: "ISO 27017/18 cover cloud; ISO 27001 is the base ISMS standard." }
    ]
  },
  {
    q: "Which attack uses compromised IoT devices?",
    a: [
      { option: "Mirai botnet", whyRight: "Mirai infected IoT devices (cameras, routers) with default credentials to launch massive DDoS attacks." },
      { option: "SQL injection", whyWrong: "This exploits database vulnerabilities in web apps, not IoT devices." },
      { option: "XSS", whyWrong: "This injects malicious scripts into websites, not related to IoT botnets." },
      { option: "CSRF", whyWrong: "This forges requests from authenticated users, not uses IoT devices." }
    ]
  },
  {
    q: "What is vishing?",
    a: [
      { option: "Voice phishing", whyRight: "Vishing uses phone calls to trick victims into revealing sensitive information, often impersonating banks or IRS." },
      { option: "Video phishing", whyWrong: "Not a standard term; vishing specifically refers to voice/phone phishing." },
      { option: "Visual spoofing", whyWrong: "Not a standard term; vishing is voice-based social engineering." },
      { option: "Virus injection", whyWrong: "This relates to malware, not voice-based social engineering attacks." }
    ]
  },
  {
    q: "Which is used to verify integrity and authenticity?",
    a: [
      { option: "Symmetric encryption", whyWrong: "Protects confidentiality, not verifies integrity or authenticity." },
      { option: "Digital signature", whyRight: "Digital signatures use asymmetric cryptography to verify both integrity (data unchanged) and authenticity (sender identity)." },
      { option: "Hashing only", whyWrong: "Verifies integrity but not authenticity (anyone can create a hash)." },
      { option: "Steganography", whyWrong: "Hides data in other files, not verifies integrity or authenticity." }
    ]
  },
  {
    q: "A supply chain attack targets:",
    a: [
      { option: "End users only", whyWrong: "Supply chain attacks compromise vendors to reach many end users indirectly." },
      { option: "Software/hardware vendors", whyRight: "Supply chain attacks compromise vendors/suppliers to distribute malicious updates to many customers (e.g., SolarWinds)." },
      { option: "Network cables", whyWrong: "Physical cable tampering is different from software supply chain attacks." },
      { option: "Firewalls", whyWrong: "While these can be compromised, supply chain attacks target the vendor/supplier." }
    ]
  },
  {
    q: "What does a WAF protect against?",
    a: [
      { option: "Web application attacks", whyRight: "Web Application Firewalls filter HTTP traffic to protect against SQL injection, XSS, and CSRF." },
      { option: "Virus infection", whyWrong: "Antivirus software protects against viruses; WAF protects web applications." },
      { option: "Physical theft", whyWrong: "Physical security controls prevent theft; WAF protects web apps." },
      { option: "Power failure", whyWrong: "UPS and generators handle power; WAF filters web application traffic." }
    ]
  },
  {
    q: "Which is an example of spoofing?",
    a: [
      { option: "ARP poisoning", whyRight: "ARP poisoning spoofs (fakes) MAC addresses to redirect network traffic for MITM attacks." },
      { option: "Buffer overflow", whyWrong: "This exploits memory vulnerabilities, not spoofs identity or addresses." },
      { option: "Ransomware", whyWrong: "This encrypts files for ransom, not spoofs identities or addresses." },
      { option: "Keylogging", whyWrong: "This records keystrokes, not spoofs identity or network addresses." }
    ]
  },
  {
    q: "What is smishing?",
    a: [
      { option: "SMS phishing", whyRight: "Smishing (SMS phishing) uses text messages to trick victims into clicking malicious links or revealing information." },
      { option: "Email phishing", whyWrong: "This uses emails; smishing specifically uses SMS text messages." },
      { option: "Social media phishing", whyWrong: "This uses social platforms; smishing uses SMS." },
      { option: "Wi-Fi phishing", whyWrong: "Evil twin attacks use Wi-Fi; smishing uses text messages." }
    ]
  },
  {
    q: "Which is a countermeasure against brute force attacks?",
    a: [
      { option: "Account lockout after failed attempts", whyRight: "Account lockout temporarily disables accounts after multiple failed attempts, thwarting brute force." },
      { option: "Longer passwords only", whyWrong: "Helps but insufficient alone; lockouts prevent unlimited attempts." },
      { option: "No login page", whyWrong: "Removing authentication defeats the purpose of security." },
      { option: "Open ports", whyWrong: "Opening ports increases attack surface, not prevents brute force." }
    ]
  },
  {
    q: "What is a watering hole attack?",
    a: [
      { option: "Compromising websites frequented by targets", whyRight: "Watering hole attacks compromise legitimate websites that targets visit frequently (like industry forums) to infect visitors." },
      { option: "Flooding with water", whyWrong: "Physical damage, not a cyber attack term." },
      { option: "Phishing via email", whyWrong: "Standard phishing uses email; watering hole compromises websites." },
      { option: "DDoS on servers", whyWrong: "DDoS overwhelms servers; watering hole compromises sites to infect visitors." }
    ]
  },
  {
    q: "Which protocol should NOT be used for sensitive data?",
    a: [
      { option: "HTTPS", whyWrong: "Encrypts HTTP traffic with TLS, protecting sensitive data in transit." },
      { option: "HTTP", whyRight: "HTTP transmits data in plaintext without encryption, making it vulnerable to eavesdropping. Never use for sensitive data." },
      { option: "SSH", whyWrong: "Provides encrypted remote access, suitable for sensitive operations." },
      { option: "SFTP", whyWrong: "Encrypts file transfers over SSH, protecting sensitive data." }
    ]
  },
  {
    q: "What does a sandbox primarily do?",
    a: [
      { option: "Isolate suspicious code", whyRight: "Sandboxes provide isolated environments to safely execute and analyze suspicious code without risking the main system." },
      { option: "Encrypt files", whyWrong: "Encryption tools protect data; sandboxes isolate and analyze code." },
      { option: "Block network traffic", whyWrong: "Firewalls block traffic; sandboxes isolate code execution." },
      { option: "Store passwords", whyWrong: "Password managers store credentials; sandboxes isolate suspicious code." }
    ]
  },
  {
    q: "Which is a common privilege escalation technique?",
    a: [
      { option: "DLL hijacking", whyRight: "DLL hijacking exploits Windows DLL search order to load malicious libraries with elevated privileges." },
      { option: "Phishing", whyWrong: "Steals credentials through social engineering, not escalates privileges technically." },
      { option: "DoS", whyWrong: "Makes systems unavailable, not escalates privileges." },
      { option: "Packet sniffing", whyWrong: "Intercepts network traffic, not escalates system privileges." }
    ]
  },
  {
    q: "What is pharming?",
    a: [
      { option: "Redirecting traffic via DNS poisoning", whyRight: "Pharming redirects website traffic to fake sites through DNS poisoning or hosts file modification despite correct URLs." },
      { option: "Farming credentials", whyWrong: "Not a standard term; pharming specifically redirects via DNS." },
      { option: "Phishing on farms", whyWrong: "Not related; pharming is DNS redirection, not location-based." },
      { option: "Malware distribution", whyWrong: "While pharming can distribute malware, it's specifically DNS-based redirection." }
    ]
  },
  {
    q: "Which is NOT a malware persistence technique?",
    a: [
      { option: "Registry run keys", whyWrong: "Malware uses registry keys to auto-start, a common persistence technique." },
      { option: "Scheduled tasks", whyWrong: "Malware creates scheduled tasks to run periodically, maintaining persistence." },
      { option: "Antivirus update", whyRight: "Antivirus updates are legitimate security activities, not malware persistence techniques." },
      { option: "DLL side-loading", whyWrong: "Malware uses DLL search order to load malicious libraries persistently." }
    ]
  },
  {
    q: "What is a crypter used for?",
    a: [
      { option: "Encrypt ransomware payload", whyWrong: "While related to encryption, crypters hide malware from AV, not create ransomware." },
      { option: "Decrypt stolen data", whyWrong: "Crypters package malware, not decrypt stolen information." },
      { option: "Hide malware from AV", whyRight: "Crypters encrypt or obfuscate malware to evade antivirus detection, making signature-based detection difficult." },
      { option: "Speed up downloads", whyWrong: "Crypters obfuscate malware, unrelated to download speeds." }
    ]
  },
  {
    q: "Which attack exploits race conditions?",
    a: [
      { option: "TOCTOU", whyRight: "Time-Of-Check-Time-Of-Use attacks exploit the time gap between checking a condition and using the resource." },
      { option: "SQL injection", whyWrong: "This injects malicious SQL code, not exploits timing gaps." },
      { option: "XSS", whyWrong: "This injects malicious scripts into websites, not exploits race conditions." },
      { option: "CSRF", whyWrong: "This forges requests from authenticated users, not exploits timing." }
    ]
  },
  {
    q: "What does a security token usually provide?",
    a: [
      { option: "Something you have", whyRight: "Security tokens (hardware keys, smart cards, mobile authenticators) represent 'something you have' in multi-factor authentication." },
      { option: "Something you know", whyWrong: "Passwords and PINs are 'something you know', not physical tokens." },
      { option: "Something you are", whyWrong: "Biometrics (fingerprints, face) are 'something you are', not tokens." },
      { option: "Somewhere you are", whyWrong: "Location-based auth is 'somewhere you are', not physical tokens." }
    ]
  },
  {
    q: "Which is a physical control?",
    a: [
      { option: "Mantrap", whyRight: "Mantraps are physical security controls - small rooms with two interlocking doors preventing tailgating." },
      { option: "Firewall rule", whyWrong: "This is a technical control filtering network traffic, not physical." },
      { option: "Antivirus", whyWrong: "This is a technical control detecting malware, not physical security." },
      { option: "Password policy", whyWrong: "This is an administrative control, not physical security." }
    ]
  },
  {
    q: "What is pretexting?",
    a: [
      { option: "Creating a fabricated scenario to obtain information", whyRight: "Pretexting is social engineering where attackers create a convincing false scenario to manipulate victims." },
      { option: "Sending pretext emails", whyWrong: "While pretexting can use emails, it's the fabricated scenario, not just emails." },
      { option: "Installing pretext malware", whyWrong: "Pretexting is social engineering, not malware installation." },
      { option: "Pretext DoS", whyWrong: "Pretexting manipulates people, not attacks system availability." }
    ]
  },
  {
    q: "Which is used to detect advanced persistent threats?",
    a: [
      { option: "Signature-based AV", whyWrong: "APTs use new techniques without known signatures, evading signature-based detection." },
      { option: "Behavior analytics / EDR", whyRight: "APTs use novel techniques; behavioral analytics and EDR detect anomalous patterns and sophisticated attack methods." },
      { option: "Basic firewall", whyWrong: "Standard firewalls filter traffic but don't detect sophisticated APT behaviors." },
      { option: "Password manager", whyWrong: "Stores credentials, unrelated to APT detection." }
    ]
  },
  {
    q: "What is a blue team?",
    a: [
      { option: "Defensive security team", whyRight: "Blue teams defend organizations by implementing security controls, monitoring systems, and responding to incidents." },
      { option: "Offensive security team", whyWrong: "This describes red teams who test defenses through attacks." },
      { option: "Management team", whyWrong: "While management oversees security, blue team specifically refers to defenders." },
      { option: "Physical security team", whyWrong: "Blue team is cyber defense, not physical security guards." }
    ]
  },
  {
    q: "Which is a red team activity?",
    a: [
      { option: "Penetration testing", whyRight: "Red teams perform offensive security testing like penetration testing to find vulnerabilities from an attacker's perspective." },
      { option: "Log monitoring", whyWrong: "This is defensive blue team activity, watching for threats." },
      { option: "Patch management", whyWrong: "This is defensive blue team activity, fixing vulnerabilities." },
      { option: "Backup verification", whyWrong: "This is defensive blue team activity, ensuring recovery capability." }
    ]
  },
  {
    q: "What does CVSS measure?",
    a: [
      { option: "Vulnerability severity", whyRight: "Common Vulnerability Scoring System provides standardized severity ratings (0-10 scale) to prioritize remediation." },
      { option: "Network speed", whyWrong: "Speed tests and bandwidth tools measure network performance, not CVSS." },
      { option: "Encryption strength", whyWrong: "Key length and algorithm strength measure encryption, not CVSS." },
      { option: "Password quality", whyWrong: "Password strength meters assess passwords, not CVSS vulnerability scores." }
    ]
  },
  {
    q: "Which is a common IoT security weakness?",
    a: [
      { option: "Default credentials", whyRight: "IoT devices often ship with default passwords that users don't change, making them easy targets." },
      { option: "Strong encryption", whyWrong: "This is a security strength, not a weakness in IoT devices." },
      { option: "Regular updates", whyWrong: "This is a security best practice, not a common IoT weakness." },
      { option: "Hardware root of trust", whyWrong: "This is an advanced security feature, not a common weakness." }
    ]
  },
  {
    q: "What is clickjacking?",
    a: [
      { option: "Tricking user into clicking hidden elements", whyRight: "Clickjacking uses transparent iframes to overlay malicious elements, tricking users into unintended actions." },
      { option: "Clicking too fast", whyWrong: "Not a security term; clickjacking is about hidden malicious elements." },
      { option: "Phishing links", whyWrong: "While related, clickjacking specifically uses hidden overlays, not just deceptive links." },
      { option: "Malware download", whyWrong: "Clickjacking tricks clicks; malware download is a separate attack vector." }
    ]
  },
  {
    q: "Which helps prevent CSRF attacks?",
    a: [
      { option: "SameSite cookies & anti-CSRF tokens", whyRight: "Anti-CSRF tokens validate request origin, and SameSite cookies prevent cross-site requests from forging actions." },
      { option: "Strong passwords", whyWrong: "Passwords don't prevent CSRF which exploits authenticated sessions." },
      { option: "HTTPS only", whyWrong: "Encryption doesn't prevent CSRF which exploits trusted user sessions." },
      { option: "Antivirus", whyWrong: "Detects malware, not prevents CSRF attacks on web applications." }
    ]
  },
  {
    q: "What is a replay attack?",
    a: [
      { option: "Capturing and resending valid data", whyRight: "Replay attacks intercept and retransmit valid network communications (like auth tokens) to impersonate users." },
      { option: "Playing audio files", whyWrong: "Not related to security; replay attacks retransmit network data." },
      { option: "Repeating phishing", whyWrong: "Persistent phishing is different from replaying intercepted network traffic." },
      { option: "Replaying video", whyWrong: "Not related; replay attacks retransmit captured authentication data." }
    ]
  },
  {
    q: "Which protocol provides secure file transfer?",
    a: [
      { option: "FTP", whyWrong: "Transmits credentials and data in plaintext, vulnerable to interception." },
      { option: "SFTP / SCP", whyRight: "SFTP and SCP encrypt file transfers over SSH, protecting data in transit." },
      { option: "Telnet", whyWrong: "Provides remote access but no encryption; not for file transfer." },
      { option: "HTTP", whyWrong: "For web browsing, not file transfer, and unencrypted." }
    ]
  },
  {
    q: "What is the primary purpose of a DMZ?",
    a: [
      { option: "Host public-facing services", whyRight: "DMZ is a perimeter network hosting public servers (web, email) separate from internal networks, limiting breach impact." },
      { option: "Store backups", whyWrong: "Backup storage is separate; DMZ hosts public services like web servers." },
      { option: "Isolate internal network", whyWrong: "While DMZ provides isolation, its primary purpose is hosting public services." },
      { option: "Run antivirus", whyWrong: "Antivirus runs on individual systems; DMZ is a network segmentation strategy." }
    ]
  },
  {
    q: "Which is a network segmentation benefit?",
    a: [
      { option: "Limits lateral movement", whyRight: "Network segmentation divides networks into isolated zones, limiting attackers' lateral movement after compromise." },
      { option: "Increases attack surface", whyWrong: "Segmentation reduces attack surface by limiting exposure, not increases it." },
      { option: "Slows patching", whyWrong: "Segmentation doesn't slow patching; it's about network isolation." },
      { option: "Reduces monitoring", whyWrong: "Segmentation enables better monitoring by zone, not reduces it." }
    ]
  },
  {
    q: "What does a proxy server primarily provide?",
    a: [
      { option: "Anonymity & filtering", whyRight: "Proxy servers act as intermediaries, providing anonymity by hiding client IPs and enabling content filtering." },
      { option: "Encryption", whyWrong: "While some proxies encrypt, primary purpose is intermediary services and filtering." },
      { option: "Authentication", whyWrong: "Proxies can require auth, but primary purpose is intermediary and filtering." },
      { option: "Backup", whyWrong: "Backup systems save data; proxies act as network intermediaries." }
    ]
  },
  {
    q: "Which is an example of obfuscation?",
    a: [
      { option: "Polymorphic malware", whyRight: "Polymorphic malware changes its code signature each replication while maintaining functionality, evading signature detection." },
      { option: "Plain text malware", whyWrong: "Easily detected; obfuscation hides or disguises code." },
      { option: "Encrypted ransomware", whyWrong: "While encrypted, this isn't code obfuscation; it's encrypting victim files." },
      { option: "Signed virus", whyWrong: "Digital signatures validate code, not obfuscate it." }
    ]
  },
  {
    q: "What is living off the land (LotL)?",
    a: [
      { option: "Using legitimate system tools for malicious purposes", whyRight: "LotL attacks use legitimate built-in tools (PowerShell, WMI) for malicious purposes, making detection harder." },
      { option: "Living in data centers", whyWrong: "Not a security term; LotL uses legitimate tools maliciously." },
      { option: "Using cloud only", whyWrong: "Cloud usage isn't LotL; LotL uses built-in system tools." },
      { option: "Living off backups", whyWrong: "Not related; LotL abuses legitimate system utilities." }
    ]
  },
  {
    q: "Which helps detect command-and-control traffic?",
    a: [
      { option: "Network flow analysis", whyRight: "Network flow analysis identifies unusual patterns like beaconing (regular intervals) to external IPs, indicating C2 channels." },
      { option: "Antivirus signatures", whyWrong: "Detect malware files, not analyze network traffic patterns." },
      { option: "Password policy", whyWrong: "Enforces credential strength, unrelated to C2 detection." },
      { option: "Patch management", whyWrong: "Fixes vulnerabilities, not detects C2 traffic patterns." }
    ]
  },
  {
    q: "What is a fileless malware?",
    a: [
      { option: "Malware that runs in memory without dropping files", whyRight: "Fileless malware executes in RAM using tools like PowerShell, leaving no files on disk for traditional AV to scan." },
      { option: "Malware with no files", whyWrong: "While similar, fileless specifically runs in memory using system tools." },
      { option: "Encrypted files only", whyWrong: "Encryption isn't fileless; fileless runs in RAM without disk files." },
      { option: "Signed executables", whyWrong: "Digital signatures validate code, unrelated to fileless execution." }
    ]
  },
  {
    q: "Which is a common cloud security concern?",
    a: [
      { option: "Shared responsibility model misunderstanding", whyRight: "Cloud shared responsibility divides security duties between provider (infrastructure) and customer (data/access); misunderstanding causes gaps." },
      { option: "Too much encryption", whyWrong: "Encryption is a security strength, not a concern; more is generally better." },
      { option: "Physical access control", whyWrong: "Cloud providers handle physical security; customer concerns are different." },
      { option: "No multi-tenancy", whyWrong: "Multi-tenancy is a cloud feature, not a security concern itself." }
    ]
  },
  {
    q: "What does CASB stand for?",
    a: [
      { option: "Cloud Access Security Broker", whyRight: "CASBs sit between cloud services and users, enforcing security policies, providing visibility, and controlling cloud usage." },
      { option: "Central Authentication Service Base", whyWrong: "Not a standard term; CASB is about cloud access security." },
      { option: "Cloud Antivirus Security Block", whyWrong: "CASB provides broader cloud security, not just antivirus." },
      { option: "Centralized Audit Security Buffer", whyWrong: "While auditing is involved, CASB specifically brokers cloud access." }
    ]
  },
  {
    q: "Which is used to protect API endpoints?",
    a: [
      { option: "API gateway + rate limiting & JWT", whyRight: "API gateways centralize security enforcement, rate limiting prevents abuse, and JWT provide secure authentication." },
      { option: "Basic auth only", whyWrong: "Basic auth transmits credentials with each request and lacks sophisticated controls." },
      { option: "No authentication", whyWrong: "Leaving APIs unauthenticated exposes them to unauthorized access and abuse." },
      { option: "Open ports", whyWrong: "Opening ports without security increases attack surface, not protects APIs." }
    ]
  }
];