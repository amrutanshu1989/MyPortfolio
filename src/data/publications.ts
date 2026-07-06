import type { Publication, PublicationCategory } from "@/types";

const B: PublicationCategory = "Blockchain";
const A: PublicationCategory = "AI";
const H: PublicationCategory = "Healthcare";
const C: PublicationCategory = "Cloud Computing";

export const publications: Publication[] = [
  {
    id: "p01",
    title:
      "Smart contract assisted blockchain based public key infrastructure system",
    authors: "A. Panigrahi, A. K. Nayak, R. Paul",
    venue: "Transactions on Emerging Telecommunications Technologies",
    year: 2022,
    doi: "10.1002/ett.4655",
    type: "journal",
    categories: [B],
    quartile: "Q1",
    impactFactor: "2.5",
    featured: true,
  },
  {
    id: "p02",
    title:
      "CTB-PKI: Clustering and Trust Enabled Blockchain Based PKI System for Efficient Communication in P2P Network",
    authors: "A. Panigrahi, A. K. Nayak, R. Paul, B. Sahu, S. Kant",
    venue: "IEEE Access, vol. 10, pp. 124277–124290",
    year: 2022,
    doi: "10.1109/ACCESS.2022.3222807",
    type: "journal",
    categories: [B],
    quartile: "Q1",
    impactFactor: "3.4",
    featured: true,
  },
  {
    id: "p03",
    title:
      "En-MinWhale: An Ensemble Approach Based on MRMR and Whale Optimization for Cancer Diagnosis",
    authors:
      "A. Panigrahi, A. Pati, B. Sahu, M. N. Das, D. S. K. Nayak, G. Sahoo, S. Kant",
    venue: "IEEE Access, vol. 11, pp. 113526–113542",
    year: 2023,
    doi: "10.1109/ACCESS.2023.3318261",
    type: "journal",
    categories: [A, H],
    quartile: "Q1",
    impactFactor: "3.4",
    featured: true,
  },
  {
    id: "p04",
    title:
      "Blockchain based secret key management for trusted platform module standard in reconfigurable platform",
    authors: "R. Paul, N. Ghosh, A. Panigrahi, A. Chakrabarti, P. Mohapatra",
    venue: "Concurrency and Computation: Practice and Experience, vol. 36, no. 22",
    year: 2024,
    doi: "10.1002/cpe.8225",
    type: "journal",
    categories: [B],
    quartile: "Q1",
    impactFactor: "1.5",
    featured: true,
  },
  {
    id: "p05",
    title:
      "Performance assessment of hybrid machine learning approaches for breast cancer and recurrence prediction",
    authors:
      "A. Pati, A. Panigrahi, M. Parhi, J. Giri, H. Qin, S. Mallik, S. R. Pattanayak, U. K. Agrawal",
    venue: "PLoS ONE, vol. 19, no. 8, e0304768",
    year: 2024,
    doi: "10.1371/journal.pone.0304768",
    type: "journal",
    categories: [A, H],
    quartile: "Q1",
    impactFactor: "2.9",
    featured: true,
  },
  {
    id: "p06",
    title: "Simulating Fog of Medical Things: Research Challenges and Opportunities",
    authors:
      "A. Pati, A. Panigrahi, M. Parhi, B. Kumar Pattanayak, B. Sahu, S. Kant",
    venue: "IEEE Access, vol. 12, pp. 146527–146550",
    year: 2024,
    doi: "10.1109/ACCESS.2024.3468015",
    type: "journal",
    categories: [H, A],
    quartile: "Q1",
    impactFactor: "3.4",
    featured: true,
  },
  {
    id: "p07",
    title:
      "Predicting Breast Cancer Relapse from Histopathological Images with Ensemble Machine Learning Models",
    authors:
      "G. Sahoo, A. K. Nayak, P. K. Tripathy, A. Panigrahi, A. Pati, B. Sahu, C. Mahanty, S. Mallik",
    venue: "Current Oncology, vol. 31, no. 11, pp. 6577–6597",
    year: 2024,
    doi: "10.3390/curroncol31110486",
    type: "journal",
    categories: [A, H],
    quartile: "Q2",
    impactFactor: "2.8",
  },
  {
    id: "p08",
    title:
      "BIMSSA: enhancing cancer prediction with salp swarm optimization and ensemble machine learning approaches",
    authors:
      "P. Panda, S. K. Bisoy, A. Panigrahi, A. Pati, B. Sahu, Z. Guo, H. Liu, P. Jain",
    venue: "Frontiers in Genetics, vol. 15",
    year: 2025,
    doi: "10.3389/fgene.2024.1491602",
    type: "journal",
    categories: [A, H],
    quartile: "Q2",
    impactFactor: "2.5",
    featured: true,
  },
  {
    id: "p09",
    title:
      "Homogeneity Adjustment of Surface Temperature Data and Study of the Climate Variability Over Coastal Odisha by a Climate Departure Index",
    authors:
      "B. Sethi, K. C. Gouda, S. C. Sahu, M. K. Mallick, A. Panigrahi, S. K. Samal",
    venue: "Pure and Applied Geophysics, vol. 181, no. 5, pp. 1661–1696",
    year: 2024,
    doi: "10.1007/s00024-024-03465-5",
    type: "journal",
    categories: [],
    quartile: "Q2",
    impactFactor: "1.9",
  },
  {
    id: "p10",
    title: "HealthCare HER: A blockchain-based decentralized application",
    authors: "A. Panigrahi, A. K. Nayak, R. Paul",
    venue:
      "International Journal of Information Systems and Supply Chain Management, vol. 15, no. 3, pp. 1–15",
    year: 2022,
    doi: "10.4018/ijisscm.290017",
    type: "journal",
    categories: [B, H],
    quartile: "Q3",
    impactFactor: "0.9",
  },
  {
    id: "p11",
    title: "Weighted Bayesian Belief Network for diabetics: a predictive model",
    authors:
      "S. Kharya, S. Soni, A. Pati, A. Panigrahi, J. Giri, H. Qin, S. Mallik, D. S. K. Nayak, T. Swarnkar",
    venue: "Frontiers in Artificial Intelligence, vol. 7",
    year: 2024,
    doi: "10.3389/frai.2024.1357121",
    type: "journal",
    categories: [A, H],
    quartile: "Q2",
    impactFactor: "3.2",
  },
  {
    id: "p12",
    title: "Fuzzy Markov model for the reliability analysis of hybrid microgrids",
    authors:
      "K. Swain, C. Chakraborty, I. S. Samant, A. Pati, J. Giri, A. Panigrahi, H. Qin, S. Mallik",
    venue: "Frontiers in Computer Science, vol. 6",
    year: 2024,
    doi: "10.3389/fcomp.2024.1406086",
    type: "journal",
    categories: [],
    quartile: "Q3",
    impactFactor: "2.4",
  },
  {
    id: "p13",
    title: "Predicting Pediatric Appendicitis using Ensemble Learning Techniques",
    authors: "A. Pati, A. Panigrahi, D. S. K. Nayak, G. Sahoo, D. Singh",
    venue: "Procedia Computer Science, vol. 218, pp. 1166–1175",
    year: 2023,
    doi: "10.1016/j.procs.2023.01.095",
    type: "journal",
    categories: [A, H],
    quartile: "Q2",
  },
  {
    id: "p14",
    title: "FOHC: Firefly Optimizer Enabled Hybrid approach for Cancer Classification",
    authors:
      "A. Pati, A. Panigrahi, B. Sahu, G. Sahoo, M. Dash, M. Parhi, B. K. Pattanayak",
    venue:
      "IJRITCC, vol. 11, no. 7s, pp. 118–125",
    year: 2023,
    doi: "10.17762/ijritcc.v11i7s.6983",
    type: "journal",
    categories: [A, H],
    quartile: "Q4",
  },
  {
    id: "p15",
    title:
      "A hybrid wrapper spider monkey optimization-simulated annealing model for optimal feature selection",
    authors: "B. Sahu, A. Panigrahi, B. Dash, P. K. Sharma, A. Pati",
    venue: "International Journal of Reconfigurable and Embedded Systems, vol. 12, no. 3, pp. 360–375",
    year: 2023,
    doi: "10.11591/ijres.v12.i3.pp360-375",
    type: "journal",
    categories: [A],
    quartile: "Q2",
  },
  {
    id: "p16",
    title:
      "A novel credit scoring system in financial institutions using artificial intelligence technology",
    authors: "G. M. Jakka, A. Panigrahi, A. Pati, M. N. Das, J. Tripathy",
    venue: "Journal of Autonomous Intelligence, vol. 6, no. 2, pp. 824–824",
    year: 2023,
    doi: "10.32629/jai.v6i2.824",
    type: "journal",
    categories: [A],
    quartile: "Q4",
  },
  {
    id: "p17",
    title:
      "Speech data collection system for KUI, a Low resourced tribal language",
    authors:
      "S. K. Nayak, A. K. Nayak, S. Mishra, P. Mohanty, N. Tripathy, A. Pati, A. Panigrahi",
    venue: "Journal of Autonomous Intelligence, vol. 7, no. 1, pp. 1–21",
    year: 2023,
    doi: "10.32629/jai.v7i1.1121",
    type: "journal",
    categories: [A],
    quartile: "Q4",
  },
  {
    id: "p18",
    title:
      "Breast cancer relapse disease prediction improvements with ensemble learning approaches",
    authors:
      "G. Sahoo, A. K. Nayak, P. K. Tripathy, A. Pati, A. Panigrahi, A. Rath, B. Moharana",
    venue:
      "Indonesian Journal of Electrical Engineering and Computer Science, vol. 35, no. 1, pp. 335–342",
    year: 2024,
    doi: "10.11591/ijeecs.v35.i1.pp335-342",
    type: "journal",
    categories: [A, H],
    quartile: "Q2",
  },
  {
    id: "p19",
    title:
      "ASBlock: An Agricultural based Supply Chain Management using Blockchain Technology",
    authors: "A. Panigrahi, A. Pati, B. Dash, G. Sahoo, D. Singh, M. Dash",
    venue: "Procedia Computer Science, vol. 235, pp. 1943–1952",
    year: 2024,
    doi: "10.1016/j.procs.2024.04.184",
    type: "journal",
    categories: [B],
    quartile: "Q2",
  },
  {
    id: "p20",
    title:
      "Ant lion and ant colony optimization integrated ensemble machine learning model for effective cancer diagnosis",
    authors: "P. Panda, S. K. Bisoy, A. Panigrahi, A. Pati",
    venue:
      "International Journal of Electrical and Computer Engineering (IJECE), vol. 15, no. 1, p. 604",
    year: 2025,
    doi: "10.11591/ijece.v15i1.pp604-613",
    type: "journal",
    categories: [A, H],
    quartile: "Q2",
  },
  {
    id: "p21",
    title:
      "Novel Hybrid Feature Selection Using Binary Portia Spider Optimization Algorithm and Fast mRMR",
    authors:
      "B. Sahu, A. Panigrahi, A. Pati, M. N. Das, P. Jain, G. Sahoo, H. Liu",
    venue: "Bioengineering, vol. 12, no. 3, p. 291",
    year: 2025,
    doi: "10.3390/bioengineering12030291",
    type: "journal",
    categories: [A, H],
    quartile: "Q2",
    impactFactor: "3.8",
    featured: true,
  },
  {
    id: "p22",
    title: "Dynamic Channel Assignment Strategies in Multi Radio Wireless Mesh Network",
    authors: "A. Panigrahi, C. Rout, C. Badjena, H. Das",
    venue: "2018 International Conference on Information Technology (ICIT)",
    year: 2018,
    doi: "10.1109/ICIT.2018.00018",
    type: "conference",
    categories: [],
  },
  {
    id: "p23",
    title:
      "An Approximation Solution to the NP-complete Joint Problem in Multi-radio WMN",
    authors: "C. Rout, A. Panigrahi, J. C. Badjena, C. Pradhan, H. Das",
    venue: "Smart Innovation, Systems and Technologies, pp. 385–396",
    year: 2019,
    doi: "10.1007/978-981-13-9282-5_36",
    type: "conference",
    categories: [],
  },
  {
    id: "p24",
    title: "M-Throttled: Dynamic Load Balancing Algorithm for Cloud Computing",
    authors: "A. Panigrahi, B. Sahu, S. K. Rout, A. K. Rath",
    venue: "Smart Innovation, Systems and Technologies, pp. 3–10",
    year: 2020,
    doi: "10.1007/978-981-15-5971-6_1",
    type: "conference",
    categories: [C],
  },
  {
    id: "p25",
    title:
      "Model-driven Automatic Paths Generation and Test Case Optimization Using Hybrid FA-BC",
    authors:
      "S. S. Panigrahi, P. K. Sahoo, B. P. Sahu, A. Panigrahi, A. K. Jena",
    venue:
      "2021 International Conference on Emerging Smart Computing and Informatics (ESCI)",
    year: 2021,
    doi: "10.1109/ESCI50559.2021.9396999",
    type: "conference",
    categories: [A],
  },
  {
    id: "p26",
    title:
      "CDA-SVM: A Chaotic Dragonfly Enriched Support Vector Machine for Micro array Data sets",
    authors:
      "B. Sahu, A. Panigrahi, S. Panigrahi, S. N. Mohanty, S. Sukla, C. N. Aher",
    venue:
      "2021 International Conference on Emerging Smart Computing and Informatics (ESCI)",
    year: 2021,
    doi: "10.1109/ESCI50559.2021.9396985",
    type: "conference",
    categories: [A, H],
  },
  {
    id: "p27",
    title: "Hetero Leach: Leach Protocol with Heterogeneous Energy Constraint",
    authors: "A. Panigrahi, B. Sahu, S. B. B. Priyadarshini",
    venue: "Smart Innovation, Systems and Technologies, pp. 21–29",
    year: 2020,
    doi: "10.1007/978-981-15-5971-6_3",
    type: "conference",
    categories: [],
  },
  {
    id: "p28",
    title:
      "Impact of Clustering technique in enhancing the Blockchain network performance",
    authors: "A. Panigrahi, A. K. Nayak, R. Paul",
    venue:
      "2022 International Conference on Machine Learning, Computer Systems and Security (MLCSS)",
    year: 2022,
    doi: "10.1109/MLCSS57186.2022.00072",
    type: "conference",
    categories: [B],
  },
  {
    id: "p29",
    title: "BPSO-PSO-SVM: An Integrated Approach for Cancer Diagnosis",
    authors: "A. Panigrahi, S. Bhutia, B. Sahu, M. G. Galety, S. N. Mohanty",
    venue: "Lecture Notes in Networks and Systems, pp. 571–579",
    year: 2022,
    doi: "10.1007/978-981-19-2177-3_53",
    type: "conference",
    categories: [A, H],
  },
  {
    id: "p30",
    title: "A Blockchain Based PKI System for Peer to Peer Network",
    authors: "A. Panigrahi, A. K. Nayak, R. Paul",
    venue: "Lecture Notes in Networks and Systems, pp. 81–88",
    year: 2022,
    doi: "10.1007/978-981-16-4807-6_9",
    type: "conference",
    categories: [B],
  },
  {
    id: "p31",
    title:
      "Hybrid Multiple Filter Embedded Political Optimizer for Feature Selection",
    authors: "B. Sahu, A. Panigrahi, S. K. Rout, A. Pati",
    venue:
      "2022 International Conference on Intelligent Controller and Computing for Smart Power (ICICCSP)",
    year: 2022,
    doi: "10.1109/ICICCSP53532.2022.9862419",
    type: "conference",
    categories: [A],
  },
  {
    id: "p32",
    title: "Early Detection of Sepsis Using LSTM Neural Network with Electronic Health Record",
    authors: "S. K. Rout, B. Sahu, A. Panigrahi, B. Nayak, A. Pati",
    venue: "Smart Innovation, Systems and Technologies, pp. 201–207",
    year: 2022,
    doi: "10.1007/978-981-19-6068-0_19",
    type: "conference",
    categories: [A, H],
  },
  {
    id: "p33",
    title: "Prevention of Phishing attacks using AI Algorithm",
    authors: "M. F. Ansari, A. Panigrahi, G. Jakka, A. Pati, K. Bhattacharya",
    venue:
      "2022 2nd Odisha International Conference on Electrical Power Engineering, Communication and Computing Technology (ODICON)",
    year: 2022,
    doi: "10.1109/ODICON54453.2022.10010185",
    type: "conference",
    categories: [A],
  },
  {
    id: "p34",
    title: "Smart Farming based on Deep Learning Approaches",
    authors:
      "S. S. Tripathy, N. Tripathy, M. Rath, A. Pati, A. Panigrahi, M. Dash",
    venue:
      "2022 2nd Odisha International Conference on Electrical Power Engineering, Communication and Computing Technology (ODICON)",
    year: 2022,
    doi: "10.1109/ODICON54453.2022.10010165",
    type: "conference",
    categories: [A],
  },
  {
    id: "p35",
    title: "ReCuRandom: A hybrid machine learning model for significant gene identification",
    authors: "D. S. K. Nayak, A. Pati, A. Panigrahi, S. Sahoo, T. Swarnkar",
    venue: "AIP Conference Proceedings",
    year: 2023,
    doi: "10.1063/5.0137029",
    type: "conference",
    categories: [A, H],
  },
  {
    id: "p36",
    title: "Enhancing the Heart Diseases Prediction Based on a Novel Hybrid Model",
    authors:
      "A. Pati, A. Panigrahi, M. Parhi, N. Panda, U. K. Agrawal, S. R. Pattanayak",
    venue:
      "2023 2nd International Conference on Ambient Intelligence in Health Care (ICAIHC)",
    year: 2023,
    doi: "10.1109/ICAIHC59020.2023.10431464",
    type: "conference",
    categories: [A, H],
  },
  {
    id: "p37",
    title:
      "Novel AI-based Prediction Approach for Improving Patient Treatment in Healthcare",
    authors:
      "R. Thatikonda, S. A. Vaddadi, B. Dash, A. Panigrahi, A. Pati, B. Sahu",
    venue:
      "2023 2nd International Conference on Ambient Intelligence in Health Care (ICAIHC)",
    year: 2023,
    doi: "10.1109/ICAIHC59020.2023.10431447",
    type: "conference",
    categories: [A, H],
  },
  {
    id: "p38",
    title:
      "Cluster-Driven CA Selection Space Optimization in Blockchain with POA for Trust Calculation",
    authors:
      "A. Panigrahi, A. Pati, B. Sahu, B. B. Dash, S. Chowdhury, S. S. Patra",
    venue:
      "2024 International Conference on IoT Based Control Networks and Intelligent Systems (ICICNIS)",
    year: 2024,
    doi: "10.1109/ICICNIS64247.2024.10823131",
    type: "conference",
    categories: [B],
  },
  {
    id: "p39",
    title:
      "Empirical Study on the Dynamic Load Balancing Approach in Cloud Computing",
    authors:
      "J. Tripathy, M. N. Das, A. Panigrahi, A. Pati, G. Sahoo, M. Dash",
    venue:
      "2024 International Conference on Advancements in Smart, Secure and Intelligent Computing (ASSIC)",
    year: 2024,
    doi: "10.1109/ASSIC60049.2024.10507983",
    type: "conference",
    categories: [C],
  },
  {
    id: "p40",
    title:
      "A Comparative Analysis of Diabetes Prediction Using Machine Learning and Deep Learning Algorithms in Healthcare",
    authors:
      "N. Tripathy, B. Moharana, S. K. Balabantaray, S. K. Nayak, A. Pati, A. Panigrahi",
    venue:
      "2024 International Conference on Advancements in Smart, Secure and Intelligent Computing (ASSIC)",
    year: 2024,
    doi: "10.1109/ASSIC60049.2024.10508008",
    type: "conference",
    categories: [A, H],
  },
  {
    id: "p41",
    title:
      "Optimizing DFIG Wind Farms: Advanced Controls and Energy Storage Integration",
    authors:
      "S. Das, R. Dash, S. Kundu, I. S. Samanta, A. Pati, A. Panigrahi",
    venue:
      "2024 1st International Conference on Cognitive, Green and Ubiquitous Computing (IC-CGU)",
    year: 2024,
    doi: "10.1109/IC-CGU58078.2024.10530747",
    type: "conference",
    categories: [],
  },
  {
    id: "p42",
    title:
      "Enhanced Seizure Detection through a Robust Denoising Autoencoder with Attention Mechanism",
    authors:
      "I. S. Samanta, S. Pattanaik, K. Swain, A. Pati, A. Panigrahi, B. Sahu",
    venue:
      "2024 Second International Conference on Networks, Multimedia and Information Technology (NMITCON)",
    year: 2024,
    doi: "10.1109/NMITCON62075.2024.10699212",
    type: "conference",
    categories: [A, H],
  },
  {
    id: "p43",
    title:
      "An Ensembled Hybrid Machine and Deep Learning Approach for Heart Diseases Prediction",
    authors:
      "A. Pati, S. R. Pattanayak, U. K. Agrawal, A. Panigrahi, M. Parhi, A. K. Pati",
    venue:
      "2024 3rd Odisha International Conference on Electrical Power Engineering, Communication and Computing Technology (ODICON)",
    year: 2024,
    doi: "10.1109/ODICON62106.2024.10797624",
    type: "conference",
    categories: [A, H],
  },
  {
    id: "p44",
    title:
      "A Hybrid Particle Swarm Optimization with Binary Ali Baba and the Forty Thieves Algorithm for Feature Selection",
    authors:
      "B. Sahu, S. Pani, A. Panigrahi, A. Pati, R. R. Patro, J. Ravindra",
    venue:
      "2024 3rd Odisha International Conference on Electrical Power Engineering, Communication and Computing Technology (ODICON)",
    year: 2024,
    doi: "10.1109/ODICON62106.2024.10797549",
    type: "conference",
    categories: [A],
  },
  {
    id: "p45",
    title:
      "A Crow Particle Swarm Optimization Algorithm with Deep Neural Network (CPSO-DNN) for High Dimensional Data Analysis",
    authors:
      "B. Sahu, A. Panigrahi, S. Pani, S. Swagatika, D. Singh, S. Kumar",
    venue:
      "2020 International Conference on Communication and Signal Processing (ICCSP)",
    year: 2020,
    doi: "10.1109/ICCSP48568.2020.9182181",
    type: "conference",
    categories: [A],
  },
  {
    id: "p46",
    title: "Issues and Challenges of Classical Cryptography in Cloud Computing",
    authors: "A. Panigrahi, A. K. Nayak, R. Paul",
    venue:
      "Book Chapter — Machine Learning Approach for Cloud Data Analytics in IoT, pp. 143–165",
    year: 2021,
    doi: "10.1002/9781119785873.ch7",
    type: "book-chapter",
    categories: [C, B],
  },
  {
    id: "p47",
    title:
      "Application of Blockchain as a Solution to the Real-World Issues in Health Care System",
    authors:
      "A. Panigrahi, B. Sahu, S. S. Panigrahi, S. Khan, A. K. Jena",
    venue: "Book Chapter — Intelligent Systems Reference Library, pp. 135–149",
    year: 2021,
    doi: "10.1007/978-3-030-69395-4_8",
    type: "book-chapter",
    categories: [B, H],
  },
  {
    id: "p48",
    title: "Impact of Optimized Segment Routing in Software Defined Networks",
    authors:
      "A. Panigrahi, B. Sahu, S. S. Panigrahi, A. K. Jena, M. S. Khan",
    venue: "Book Chapter, pp. 263–287",
    year: 2022,
    doi: "10.1002/9781119884392.ch12",
    type: "book-chapter",
    categories: [],
  },
  {
    id: "p49",
    title: "Pragmatic Analysis of Social Web Components on Semantic Web Mining",
    authors: "S. Pani, B. Sahu, J. Mishra, S. N. Mohanty, A. Panigrahi",
    venue: "Book Chapter, pp. 83–108",
    year: 2022,
    doi: "10.1002/9781119836759.ch6",
    type: "book-chapter",
    categories: [A],
  },
  {
    id: "p50",
    title:
      "Machine learning-based integrated approach for cancer microarray data analysis",
    authors: "A. Panigrahi, M. Dash, B. Sahu, A. Pati, S. N. Mohanty",
    venue:
      "Book Chapter — Machine Learning for Healthcare Systems, River Publishers, pp. 149–168",
    year: 2023,
    doi: "10.1201/9781003438816",
    type: "book-chapter",
    categories: [A, H],
  },
  {
    id: "p51",
    title: "Artificial intelligence in improving disease diagnosis",
    authors:
      "A. Pati, S. R. Addula, A. Panigrahi, B. Sahu, D. S. K. Nayak, M. Dash",
    venue:
      "Book Chapter — Artificial Intelligence in Medicine and Healthcare, pp. 24–49",
    year: 2025,
    doi: "10.1201/9781003508595-2",
    type: "book-chapter",
    categories: [A, H],
  },
];

export const featuredPublications = publications.filter((p) => p.featured);

export const publicationCategoryFilters = [
  "All",
  "Blockchain",
  "AI",
  "Healthcare",
  "Cloud Computing",
] as const;
