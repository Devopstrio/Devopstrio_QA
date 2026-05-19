import React, { useState, useEffect } from "react";
import {
  FiSearch,
  FiZap,
  FiShield,
  FiCpu,
  FiArrowRight,
  FiFilter,
  FiGrid,
  FiCheckCircle,
  FiActivity,
  FiDatabase,
  FiMonitor,
  FiCode,
  FiTarget,
  FiBox,
  FiLayers,
  FiBriefcase,
  FiExternalLink,
  FiMail,
  FiPhone,
  FiMapPin,
  FiBook,
  FiFileText,
  FiBookOpen,
  FiMap,
  FiUser
} from "react-icons/fi";
import {
  FaAws,
  FaMicrosoft,
  FaGithub,
  FaGitlab,
  FaJenkins,
  FaBitbucket,
  FaGoogle,
  FaSlack,
  FaJira,
  FaDocker,
  FaLinkedin,
  FaTwitter
} from "react-icons/fa";
import useSEO from "../hooks/useSEO";

import Serviceshero from "../components/Hero/Serviceshero";
import Cta from "../components/Cta/Cta"
import Newsletter from "../components/Newsletter/Newsletter";

import "../Style/ProvideServices.css";

const integrations = [
  // --- TOP THREE POPULAR (Azure, Jira, Slack) ---
  { name: "Azure", category: "Cloud Services", icon: <FaMicrosoft />, trending: true, desc: "Connect Devopstrio with Azure to manage resources, identities, and cloud posture across your subscriptions." },
  { name: "Jira", category: "Ticketing & Messaging", icon: <FaJira />, trending: true, desc: "Open and update tickets on Devopstrio Issues in your projects to streamline your remediation workflow." },
  { name: "Slack", category: "Ticketing & Messaging", icon: <FaSlack />, trending: true, desc: "Send Slack messages to your security channels using SlackBot for real-time threat alerts." },

  // --- API SECURITY ---
  {
    name: "Firetail",
    category: "API Security",
    icon: <FiZap />,
    desc: "Pull Devopstrio inventory to firetail for API discovery and enrich Devopstrio with API runtime events"
  },
  {
    name: "Google Apigee",
    category: "API Security",
    icon: <FaGoogle />,
    desc: "Fetch API Endpoints from Google Apigee to the Devopstrio Security Graph",
    isNew: true
  },
  {
    name: "Noname",
    category: "API Security",
    icon: <FiShield />,
    desc: "Pull Devopstrio Issues into Noname for prioritization related to APIs"
  },

  // --- API Security Scanners ---
  {
    name: "CyCognito",
    category: "API Security Scanners",
    icon: <FiTarget />,
    desc: "Enrich Devopstrio with CyCognito's DAST findings to identify and prioritize external-facing API risks."
  },
  {
    name: "Equixly",
    category: "API Security Scanners",
    icon: <FiLayers />,
    desc: "Enrich DAST findings from Equixly into Devopstrio for comprehensive API vulnerability coverage.",
    isNew: true
  },
  {
    name: "HackerOne",
    category: "API Security Scanners",
    icon: <FiShield />,
    desc: "Pull HackerOne pen test and bug bounty findings into Devopstrio to see exploitable vulnerabilities.",
    isNew: true
  },
  {
    name: "Invicti (Netsparker)",
    category: "API Security Scanners",
    icon: <FiSearch />,
    desc: "Fetch Invicti's DAST findings about publicly exposed Application Endpoint objects into Devopstrio."
  },
  {
    name: "Salt Security",
    category: "API Security Scanners",
    icon: <FiActivity />,
    desc: "Enrich Devopstrio with runtime events and findings from Salt Security to protect against API-based threats."
  },
  {
    name: "StackHawk",
    category: "API Security Scanners",
    icon: <FiZap />,
    desc: "Enrich DAST findings from StackHawk into Devopstrio for automated API security testing in production.",
    isNew: true
  },
  {
    name: "Traceable by Harness",
    category: "API Security Scanners",
    icon: <FiActivity />,
    desc: "Integrate with Traceable to prioritize API risk and send API malicious runtime events to Devopstrio."
  },
  // --- Application Security ---
  {
    name: "Alma Security",
    category: "Application Security",
    icon: <FiActivity />,
    desc: "Enrich Devopstrio with runtime events from Alma Security to provide deep visibility into application execution.",
    isNew: true
  },
  {
    name: "Apiiro",
    category: "Application Security",
    icon: <FiLayers />,
    desc: "Ingest Devopstrio container image vulnerabilities to Apiiro for comprehensive code-to-cloud risk context."
  },
  {
    name: "Black Duck",
    category: "Application Security",
    icon: <FiShield />,
    desc: "Pull Devopstrio Issues into Black Duck SRM for unified AppSec triage and open-source risk management.",
    isNew: true
  },
  {
    name: "Boostsecurity",
    category: "Application Security",
    icon: <FiBox />,
    desc: "Pull container resources and security findings into Boostsecurity for centralized dev-first security."
  },
  {
    name: "Crash Override",
    category: "Application Security",
    icon: <FiTarget />,
    desc: "Send cloud resources and security posture data to Crash Override for unified risk modeling."
  },
  {
    name: "DefectDojo",
    category: "Application Security",
    icon: <FiTarget />,
    desc: "Pull issues and vulnerabilities into DefectDojo to centralize and automate your vulnerability management."
  },
  {
    name: "Legit Security",
    category: "Application Security",
    icon: <FiShield />,
    desc: "Send Devopstrio container image vulnerabilities and inventory to Legit for unified code-to-cloud risk context."
  },
  {
    name: "OXSecurity",
    category: "Application Security",
    icon: <FiLayers />,
    desc: "Pull Issues into OX Security to consolidate findings across tools and automate supply chain security."
  },
  {
    name: "Tromzo",
    category: "Application Security",
    icon: <FiZap />,
    desc: "Send Devopstrio Issues to Tromzo and automate the remediation lifecycle of security findings."
  },
  {
    name: "Tumeryk",
    category: "Application Security",
    icon: <FiShield />,
    desc: "Send cloud configuration findings to Tumeryk to bridge the gap between cloud and application security."
  },
  {
    name: "Veracode ASPM",
    category: "Application Security",
    icon: <FiActivity />,
    desc: "Pull Devopstrio issues and vulnerabilities to VRM for multi-stage prioritization and response."
  },
  // --- Application Security Scanners ---
  {
    name: "Checkmarx",
    category: "Application Security Scanners",
    icon: <FiCode />,
    desc: "Enrich with Checkmarx SAST finding and pull Devopstrio cloud inventory and assets for remediation."
  },
  {
    name: "Contrast Security",
    category: "Application Security Scanners",
    icon: <FiActivity />,
    desc: "Enrich Devopstrio with Contrast IAST findings for real-time application security testing."
  },
  {
    name: "Cycode",
    category: "Application Security Scanners",
    icon: <FiShield />,
    desc: "Send vulnerabilities Devopstrio detects to Cycode to secure your software supply chain."
  },
  {
    name: "Endor Labs",
    category: "Application Security Scanners",
    icon: <FiLayers />,
    desc: "The integration enriches Devopstrio with both SCA and SAST findings from Endor Labs platform.",
    isNew: true
  },
  {
    name: "Escape",
    category: "Application Security Scanners",
    icon: <FiSearch />,
    desc: "Pull the Devopstrio inventory into Escape for application testing and enrich Devopstrio with Escape's DAST findings."
  },
  {
    name: "Harness SAST and SCA",
    category: "Application Security Scanners",
    icon: <FiZap />,
    desc: "Enrich Devopstrio with Harness SAST and SCA findings to identify code-level vulnerabilities."
  },
  {
    name: "Jit",
    category: "Application Security Scanners",
    icon: <FiCode />,
    desc: "Enrich Devopstrio with Jit SAST findings and pull Devopstrio Issues into Jit for bidirectional analysis."
  },
  {
    name: "Mend.io",
    category: "Application Security Scanners",
    icon: <FiShield />,
    desc: "Enrich Devopstrio with Mend.io SAST findings to secure your custom code and dependencies."
  },
  {
    name: "Oligo Security",
    category: "Application Security Scanners",
    icon: <FiShield />,
    desc: "Enrich Vulnerability findings from Oligo Security to Devopstrio for open-source library protection.",
    isNew: true
  },
  {
    name: "Rapid7",
    category: "Application Security Scanners",
    icon: <FiTarget />,
    desc: "InsightAppSec is a DAST solution that automatically finds vulnerabilities by simulating real-world attacks."
  },
  {
    name: "Semgrep",
    category: "Application Security Scanners",
    icon: <FiCode />,
    desc: "Enrich Devopstrio with Semgrep SAST findings for lightweight, high-speed static analysis."
  },
  {
    name: "Snyk",
    category: "Application Security Scanners",
    icon: <FiSearch />,
    desc: "Fetch scan resultes from Snyk to use Devopstrio as your Unified Vulnerability Management solution."
  },
  {
    name: "SonarQube",
    category: "Application Security Scanners",
    icon: <FiActivity />,
    desc: "Fetch application-level findings from SonarQube for unified exposure management in Devopstrio."
  },
  {
    name: "Zeropath",
    category: "Application Security Scanners",
    icon: <FiZap />,
    desc: "Enrich Devopstrio with ZeroPath SAST and SCA Findings for developer-friendly security insights.",
    isNew: true
  },

  // --- Artificial Intelligence ---
  {
    name: "Amazon Bedrock",
    category: "Artificial Intelligence",
    icon: <FaAws />,
    ai: true,
    desc: "Secure and monitor your foundational AI models and data privacy in Amazon Bedrock."
  },
  {
    name: "Google Gemini Assist",
    category: "Artificial Intelligence",
    icon: <FaGoogle />,
    ai: true,
    desc: "Bridge the gap between AI development and security intel with Google's advanced AI models."
  },
  {
    name: "OpenAI Platform",
    category: "Artificial Intelligence",
    icon: <FiZap />,
    ai: true,
    desc: "Protect your OpenAI API usage and ensure data compliance across your enterprise AI initiatives."
  },
  {
    name: "Azure OpenAI",
    category: "Artificial Intelligence",
    icon: <FaMicrosoft />,
    ai: true,
    desc: "Connect Devopstrio to Azure OpenAI to secure your private AI deployments and model data."
  },
  {
    name: "Vertex AI",
    category: "Artificial Intelligence",
    icon: <FaGoogle />,
    ai: true,
    desc: "Gain visibility into Google Vertex AI resources and protect your machine learning pipelines."
  },
  // --- CI/CD ---
  { name: "Atlantis", category: "CI/CD", icon: <FiZap />, desc: "Integrating Devopstrio CLI as part of your CI/CD pipeline in Atlantis." },
  { name: "Atlassian Bamboo", category: "CI/CD", icon: <FiLayers />, desc: "Integrating Devopstrio CLI as part of your CI/CD pipeline in Atlassian Bamboo." },
  { name: "AWS CodeBuild", category: "CI/CD", icon: <FaAws />, desc: "Integrating Devopstrio CLI as part of your CI/CD pipeline in AWS CodeBuild." },
  { name: "Azure DevOps CI", category: "CI/CD", icon: <FaMicrosoft />, desc: "Integrating Devopstrio CLI as part of your CI/CD pipeline in Azure DevOps." },
  { name: "Bitbucket", category: "CI/CD", icon: <FaBitbucket />, desc: "Use the Bitbucket integration to orchestrate the Devopstrio CLI in your pipeline." },
  { name: "Brainboard", category: "CI/CD", icon: <FiLayers />, desc: "Use the Brainboard integration to orchestrate the Devopstrio CLI in your pipeline." },
  { name: "Buildkite", category: "CI/CD", icon: <FiActivity />, desc: "Use Buildkite to orchestrate the Devopstrio CLI in your pipeline." },
  { name: "CircleCI", category: "CI/CD", icon: <FiZap />, desc: "Integrating Devopstrio CLI as part of your CI/CD pipeline in CircleCI." },
  { name: "Git Hooks", category: "CI/CD", icon: <FiCode />, desc: "Use Git Hooks to orchestrate the Devopstrio CLI in your pipeline." },
  { name: "GitHub CI", category: "CI/CD", icon: <FaGithub />, desc: "Integrating Devopstrio CLI as part of your CI/CD pipeline in GitHub Actions." },
  { name: "GitLab CI", category: "CI/CD", icon: <FaGitlab />, desc: "Integrating Devopstrio CLI as part of your CI/CD pipeline in GitLab CI/CD." },
  { name: "Google Cloud Build", category: "CI/CD", icon: <FaGoogle />, desc: "Integrating Devopstrio CLI as part of your CI/CD pipeline in Google Cloud Build." },
  { name: "Harness", category: "CI/CD", icon: <FiZap />, desc: "Use Harness to orchestrate the Devopstrio CLI in your pipeline." },
  { name: "Jenkins CI", category: "CI/CD", icon: <FaJenkins />, desc: "Integrating Devopstrio CLI as part of your CI/CD pipeline in Jenkins." },
  { name: "JetBrains TeamCity", category: "CI/CD", icon: <FiMonitor />, desc: "Integrating Devopstrio CLI as part of your CI/CD pipeline in JetBrains TeamCity." },
  { name: "OpenShift", category: "CI/CD", icon: <FiBox />, desc: "Integrating Devopstrio CLI as part of your CI/CD pipeline in OpenShift." },
  { name: "Spacelift", category: "CI/CD", icon: <FiLayers />, desc: "Integrate Devopstrio CLI to Spacelift for automated cloud infrastructure security." },
  { name: "Travis CI", category: "CI/CD", icon: <FiActivity />, desc: "Integrating Devopstrio CLI as part of your CI/CD pipeline in Travis CI." },

  // --- Version Control ---
  {
    name: "Azure DevOps Connector",
    category: "Version Control",
    icon: <FaMicrosoft />,
    desc: "Connect your Azure DevOps organizations to scan your source code for vulnerabilities and secrets."
  },
  {
    name: "Bitbucket Cloud",
    category: "Version Control",
    icon: <FiLayers />,
    desc: "Connect your Bitbucket repositories to scan your source code and secure your software supply chain.",
    isNew: true
  },
  {
    name: "Bitbucket Data Center",
    category: "Version Control",
    icon: <FiLayers />,
    desc: "Connect your self-hosted Bitbucket repositories to scan your source code for security risks."
  },
  {
    name: "GitHub Connector",
    category: "Version Control",
    icon: <FaGithub />,
    desc: "Connect your GitHub repositories to scan your source code and identify misconfigurations."
  },
  {
    name: "GitLab Connector",
    category: "Version Control",
    icon: <FaGitlab />,
    desc: "Connect your GitLab projects to scan your source code and ensure secure application delivery."
  },
  {
    name: "HCP Terraform",
    category: "Version Control",
    icon: <FiCode />,
    desc: "Connect your HashiCorp Terraform to scan your infrastructure as code (IaC) templates for security gaps."
  },

  // --- Cloud Services ---
  { name: "Amazon S3", category: "Cloud Services", icon: <FaAws />, desc: "Export your Devopstrio reports to S3 for long-term storage and compliance auditing." },
  { name: "Amazon SNS", category: "Cloud Services", icon: <FaAws />, desc: "Send Issues notification to SNS to create real-time automation flows in AWS." },
  { name: "Amazon SQS", category: "Cloud Services", icon: <FaAws />, desc: "Send Devopstrio Issues to an SQS Queue to create resilient automation flows within AWS." },
  { name: "AWS EventBridge", category: "Cloud Services", icon: <FaAws />, desc: "Send Issues notification to EventBridge to trigger serverless automation flows." },
  { name: "Azure Blob Storage", category: "Cloud Services", icon: <FaMicrosoft />, desc: "Export Devopstrio reports to your Azure blob storage containers for centralized analysis." },
  { name: "Azure Logic Apps", category: "Cloud Services", icon: <FaMicrosoft />, desc: "Trigger an Azure Logic Apps Workflow to automate incident response in Azure." },
  { name: "Google Cloud Pub/Sub", category: "Cloud Services", icon: <FaGoogle />, desc: "Send Issues notification to Pub/Sub to create scalable automation flows in GCP." },
  { name: "Microsoft Azure Service Bus", category: "Cloud Services", icon: <FaMicrosoft />, desc: "Send Issues notification to ServiceBus to create reliable automation flows in Azure." },
  { name: "Vercel", category: "Cloud Services", icon: <FiZap />, desc: "Gain comprehensive visibility into your Vercel assets and identify security misconfigurations.", isNew: true },
  // --- CMDB ---
  { name: "ServiceNow CMDB", category: "CMDB", icon: <FiBriefcase />, desc: "Pull cloud inventory to ServiceNow CMDB to maintain an accurate and unified configuration database." },
  // --- Compliance Management ---
  {
    name: "USAI Archangel",
    category: "Compliance Management",
    icon: <FiShield />,
    desc: "Pull Devopstrio issues, resources and findings to USAI Archangel platform for unified compliance posture."
  },
  {
    name: "6clicks",
    category: "Compliance Management",
    icon: <FiLayers />,
    desc: "Pull Issues to align to compliance frameworks and controls in 6clicks for automated GRC."
  },
  {
    name: "Akitra Andromeda",
    category: "Compliance Management",
    icon: <FiMonitor />,
    desc: "Pull Devopstrio findings, issues, users and resources to Akitra Andromeda for compliance monitoring."
  },
  {
    name: "Anecdotes",
    category: "Compliance Management",
    icon: <FiBook />,
    desc: "Pull Devopstrio Issues into the Anecdotes compliance assessment process to automate evidence collection."
  },
  {
    name: "Caveonix",
    category: "Compliance Management",
    icon: <FiShield />,
    desc: "Pull vulnerabilities, cloud findings, and inventory for continuous compliance across hybrid clouds."
  },
  {
    name: "ComplianceCOW",
    category: "Compliance Management",
    icon: <FiActivity />,
    desc: "Pull vulnerabilities and inventory findings for continuous compliance monitoring and reporting."
  },
  {
    name: "CYFOX OmniSec",
    category: "Compliance Management",
    icon: <FiShield />,
    desc: "Pull Devopstrio issues, findings and resources to CYFOX OmniSec for real-time compliance monitoring."
  },
  {
    name: "Cypago",
    category: "Compliance Management",
    icon: <FiMonitor />,
    desc: "Pull vulnerabilities into Cypago for automated compliance monitoring and risk management."
  },
  {
    name: "Drata",
    category: "Compliance Management",
    icon: <FiShield />,
    desc: "Send Devopstrio Issues for continuous compliance monitoring in Drata to streamline audit readiness."
  },
  {
    name: "Hyperproof",
    category: "Compliance Management",
    icon: <FiFileText />,
    desc: "Automate evidence collection for compliance activities and maintain a single source of truth."
  },
  {
    name: "RegScale",
    category: "Compliance Management",
    icon: <FiBookOpen />,
    desc: "Pull Devopstrio issues to update your security and compliance documentation in real-time."
  },
  {
    name: "Scytale",
    category: "Compliance Management",
    icon: <FiLayers />,
    desc: "Pull Devopstrio issues and inventory to Scytale for automated SOC 2 and ISO 27001 readiness."
  },
  {
    name: "ServiceNow Configuration Compliance",
    category: "Compliance Management",
    icon: <FiBriefcase />,
    desc: "Pull Devopstrio Issues and host configuration findings to prioritize remediation and ensure compliance."
  },
  {
    name: "Sprinto",
    category: "Compliance Management",
    icon: <FiZap />,
    desc: "Sprinto pulls Devopstrio issues for compliance tracking and SLA-based remediation workflows.",
    isNew: true
  },
  {
    name: "TrustMAPP",
    category: "Compliance Management",
    icon: <FiMap />,
    desc: "Ingest Devopstrio issues in TrustMAPP to align to compliance frameworks and measure maturity."
  },
  {
    name: "Vanta",
    category: "Compliance Management",
    icon: <FiShield />,
    desc: "Send Devopstrio users and information to align to compliance requirements for automated audits in Vanta."
  },
  {
    name: "ZenGRC",
    category: "Compliance Management",
    icon: <FiShield />,
    desc: "Pull Devopstrio findings, issues, and resources to ZenGRC for unified risk and compliance monitoring."
  },
  // --- Cyber Resilience ---
  {
    name: "Cohesity",
    category: "Cyber Resilience",
    icon: <FiActivity />,
    desc: "Ingest tags to Devopstrio to see backed up assets and pull Issues to Cohesity for context on restored resources."
  },
  {
    name: "Commvault",
    category: "Cyber Resilience",
    icon: <FiLayers />,
    desc: "Pull a Devopstrio vulnerability report for restored VMs on demand to view in Commvault for secure recovery."
  },

  // --- Cyber Risk Quantification ---
  {
    name: "Balbix by Safe",
    category: "Cyber Risk Quantification",
    icon: <FiLayers />,
    desc: "Pull issues, vulnerabilities, and cloud configuration findings into Balbix for AI-powered risk quantification."
  },
  {
    name: "Cye Security",
    category: "Cyber Risk Quantification",
    icon: <FiTarget />,
    desc: "Pull Issues and vulnerabilities into CYE for determining ROI and business impact when remediating risks."
  },
  {
    name: "Onyxia Cyber",
    category: "Cyber Risk Quantification",
    icon: <FiActivity />,
    desc: "Pull vulnerabilities and Issues to Onyxia to proactively report on your real-time risk posture."
  },
  {
    name: "Safe Security",
    category: "Cyber Risk Quantification",
    icon: <FiShield />,
    desc: "Integrate with Safe Security to prioritize risk management based on financial ROI and threat exposure."
  },

  // --- Data Security Scanners ---
  {
    name: "Amazon Macie",
    category: "Data Security Scanners",
    icon: <FaAws />,
    desc: "Ingest findings from Amazon Macie into Devopstrio for centralized data security visibility."
  },
  {
    name: "Bedrock Security",
    category: "Data Security Scanners",
    icon: <FiShield />,
    desc: "Enrich Devopstrio with Bedrock Security data findings (Preview) to protect sensitive cloud data."
  },
  {
    name: "BigID",
    category: "Data Security Scanners",
    icon: <FiLayers />,
    desc: "Enrich Devopstrio with BigID's data findings and pull Devopstrio Issues for a bidirectional flow (Preview)."
  },
  {
    name: "Cyera",
    category: "Data Security Scanners",
    icon: <FiShield />,
    desc: "Enrich Devopstrio with Cyera's data findings and pull Devopstrio Issues for a bidirectional flow (Preview)."
  },
  {
    name: "Dig Security",
    category: "Data Security Scanners",
    icon: <FiSearch />,
    desc: "Enrich Devopstrio with Dig Security's data findings and pull Devopstrio Issues for a bidirectional flow."
  },
  {
    name: "Laminar",
    category: "Data Security Scanners",
    icon: <FiLayers />,
    desc: "Enrich Devopstrio with Laminar's data findings and pull Devopstrio Issues for a bidirectional flow."
  },
  {
    name: "Proofpoint DSPM",
    category: "Data Security Scanners",
    icon: <FiShield />,
    desc: "Enrich Devopstrio with Proofpoint DSPM findings and pull Issues to Proofpoint for infrastructure context."
  },
  {
    name: "Sentra",
    category: "Data Security Scanners",
    icon: <FiActivity />,
    desc: "Enrich Devopstrio with Sentra Data Security findings to identify and protect sensitive data assets."
  },

  // --- Data & AI ---
  {
    name: "OpenAI Platform (Data)",
    category: "Data & AI",
    icon: <FiZap />,
    desc: "Connect your OpenAI enterprise organizations to gain visibility to your AI models, jobs, and datasets."
  },
  {
    name: "Snowflake Connector",
    category: "Data & AI",
    icon: <FiLayers />,
    desc: "Connect to your Snowflake organization across clouds to scan for sensitive data and ensure compliance."
  },

  // --- Data Lake & Analytics ---
  {
    name: "CloudQuery",
    category: "Data Lake & Analytics",
    icon: <FiSearch />,
    desc: "Query across a variety of assets in Devopstrio and other security tools through your CloudQuery console."
  },
  {
    name: "Cribl",
    category: "Data Lake & Analytics",
    icon: <FiZap />,
    desc: "Integrate Cribl Stream to seamlessly send Devopstrio data to multiple platforms for unified logging."
  },
  {
    name: "Dassana",
    category: "Data Lake & Analytics",
    icon: <FiLayers />,
    desc: "Pull vulnerabilities and inventory into Dassana for analytics on your Snowflake database."
  },
  {
    name: "Databahn API",
    category: "Data Lake & Analytics",
    icon: <FiActivity />,
    desc: "Pull Devopstrio Issues, findings and audit logs into Databahn platform for advanced threat analysis."
  },
  {
    name: "Elastic",
    category: "Data Lake & Analytics",
    icon: <FiSearch />,
    desc: "Ingest Devopstrio issues, vulnerabilities, and audit logs to Elastic to correlate across multiple tools."
  },
  {
    name: "Polarity",
    category: "Data Lake & Analytics",
    icon: <FiMonitor />,
    desc: "Send Devopstrio vulnerabilities and Issues to Polarity to query across different tools in a single view."
  },
  {
    name: "Snowflake",
    category: "Data Lake & Analytics",
    icon: <FiLayers />,
    desc: "Export Devopstrio reports directly to your Snowflake databases for large-scale security analytics."
  },
  {
    name: "Sola",
    category: "Data Lake & Analytics",
    icon: <FiShield />,
    desc: "Send Devopstrio Issues and Findings to Sola to enhance your cloud data security posture."
  },
  {
    name: "TargetBoard",
    category: "Data Lake & Analytics",
    icon: <FiTarget />,
    desc: "Send Devopstrio issues to TargetBoard for consolidated security reporting and visibility."
  },
  {
    name: "Tarsal",
    category: "Data Lake & Analytics",
    icon: <FiActivity />,
    desc: "Pull Devopstrio audit logs to Tarsal to be sent to security destinations of your choice."
  },

  // --- Developer Tools ---
  {
    name: "Backstage",
    category: "Developer Tools",
    icon: <FiLayers />,
    desc: "Pull Devopstrio issues and vulnerabilities related to Backstage entities to provide security context to developers."
  },
  {
    name: "HashiCorp",
    category: "Developer Tools",
    icon: <FiCode />,
    desc: "Connect your Terraform to scan your Infrastructure as Code (IaC) templates for misconfigurations."
  },
  {
    name: "JetBrains",
    category: "Developer Tools",
    icon: <FiMonitor />,
    desc: "Integrate with JetBrains IDEs to locally scan your code for vulnerabilities before committing."
  },
  {
    name: "Lovable",
    category: "Developer Tools",
    icon: <FiZap />,
    desc: "Use Devopstrio CLI to scan Lovable AI-generated code for vulnerabilities before deployment.",
    isNew: true
  },
  {
    name: "StackGen",
    category: "Developer Tools",
    icon: <FiLayers />,
    desc: "Connect Devopstrio CLI to the StackGen platform to orchestrate secure application delivery."
  },
  {
    name: "Terraform Provider",
    category: "Developer Tools",
    icon: <FiCode />,
    desc: "Use the Terraform provider to seamlessly manage security data sources and cloud resources."
  },

  // --- Identity Security ---
  {
    name: "Aembit",
    category: "Identity Security",
    icon: <FiZap />,
    desc: "Send inventory to Aembit to block actions based on Devopstrio security posture and identity risk."
  },
  {
    name: "Britive",
    category: "Identity Security",
    icon: <FiShield />,
    desc: "Push Devopstrio issues to Britive to ensure secure just-in-time access and identity governance."
  },
  {
    name: "Clutch Security",
    category: "Identity Security",
    icon: <FiLayers />,
    desc: "Pull Devopstrio data findings to Clutch Security to prioritize identity risks and unauthorized access."
  },
  {
    name: "ConductorOne",
    category: "Identity Security",
    icon: <FiShield />,
    desc: "Send Devopstrio Issues and IAM data to ConductorOne for identity-aware cloud security governance.",
    isNew: true
  },
  {
    name: "CyberArk",
    category: "Identity Security",
    icon: <FiShield />,
    desc: "Send Devopstrio Issues to the CyberArk Identity Security Platform to protect privileged credentials."
  },
  {
    name: "Entro Security",
    category: "Identity Security",
    icon: <FiSearch />,
    desc: "Pull data findings into Entro to help prioritize identity-centric risks and vulnerabilities."
  },
  {
    name: "Linx Security",
    category: "Identity Security",
    icon: <FiUser />,
    desc: "Send Devopstrio identity information to Linx to gain a unified view of identity and cloud security."
  },
  {
    name: "Oasis Security",
    category: "Identity Security",
    icon: <FiActivity />,
    desc: "Send Data Findings to Oasis to correlate identity risk and prioritize remediation efforts."
  },
  {
    name: "Okta",
    category: "Identity Security",
    icon: <FiUser />,
    desc: "Connect Okta to gain visibility to your Identity Provider security and cloud access management."
  },
  {
    name: "Saviynt",
    category: "Identity Security",
    icon: <FiLayers />,
    desc: "Send Devopstrio Cloud Resources to Saviynt to automate identity governance and administration (IGA)."
  },
  {
    name: "Unosecur",
    category: "Identity Security",
    icon: <FiShield />,
    desc: "Pull Devopstrio data findings to Unosecur to identify and mitigate identity-based threats in real-time."
  },

  // --- MDR ---
  {
    name: "Arctic Wolf",
    category: "MDR",
    icon: <FiShield />,
    desc: "Send Devopstrio Threats, Issues and Findings to Arctic Wolf for 24/7 managed detection and response.",
    isNew: true
  },
  {
    name: "AWS Security Incident Response",
    category: "MDR",
    icon: <FaAws />,
    desc: "Send Threat information from Devopstrio to AWS SIR to open cases for expert incident response teams."
  },
  {
    name: "Daylight",
    category: "MDR",
    icon: <FiZap />,
    desc: "Send Devopstrio Defend Detections to Daylight to enhance your managed threat hunting capabilities."
  },
  {
    name: "Expel",
    category: "MDR",
    icon: <FiSearch />,
    desc: "Send Devopstrio Issues to Expel to have your cloud security risks triaged and investigated by experts."
  },
  {
    name: "mnemonic",
    category: "MDR",
    icon: <FiActivity />,
    desc: "Receives Devopstrio security signals via webhook for 24/7 managed detection and response (MDR).",
    isNew: true
  },
  {
    name: "Red Canary",
    category: "MDR",
    icon: <FiShield />,
    desc: "Ingest Devopstrio issues and inventory to Red Canary's MDR platform to enhance remediation at scale."
  },
  {
    name: "ReliaQuest",
    category: "MDR",
    icon: <FiLayers />,
    desc: "Pull Devopstrio Issues into ReliaQuest GreyMatter for unified triage, investigation, and response."
  },
  {
    name: "Sygnia",
    category: "MDR",
    icon: <FiSearch />,
    desc: "Pull Threat Detection Issues into Sygnia for deep forensics and incident response team investigation."
  },
  {
    name: "Tamnoon",
    category: "MDR",
    icon: <FiZap />,
    desc: "Simplify complex cloud security while increasing remediation speed and agility with Tamnoon."
  },
  {
    name: "VisionX by Smarttech247",
    category: "MDR",
    icon: <FiMonitor />,
    desc: "Pull Devopstrio issues to VisionX for unified risk reporting, expert triage, and executive dashboards."
  },

  // --- Network Security ---
  {
    name: "Aviatrix",
    category: "Network Security",
    icon: <FiActivity />,
    desc: "Send important issues and security findings to Aviatrix for automated cloud network orchestration."
  },
  {
    name: "Cato Networks",
    category: "Network Security",
    icon: <FiShield />,
    desc: "Ingest cloud findings into Cato XOps for unified security correlation and real-time network protection.",
    isNew: true
  },
  {
    name: "Check Point",
    category: "Network Security",
    icon: <FiLayers />,
    desc: "Bring network context into the Security Graph to enrich cloud visibility and strengthen your overall posture."
  },
  {
    name: "Fortinet",
    category: "Network Security",
    icon: <FiShield />,
    desc: "Send Devopstrio issues and cloud events to Fortinet to enable risk-based network protection and response."
  },
  {
    name: "Illumio",
    category: "Network Security",
    icon: <FiShield />,
    desc: "Push Devopstrio Issues to Illumio to create secure network policies and maintain micro-segmentation at scale."
  },
  {
    name: "Netography",
    category: "Network Security",
    icon: <FiActivity />,
    desc: "Send Devopstrio vulnerabilities to Netography's network management platform for unified traffic analysis."
  },
  {
    name: "Netskope",
    category: "Network Security",
    icon: <FiLayers />,
    desc: "Integrate with Netskope to push Issues and validate secure access policies across your cloud apps."
  },

  // --- SaaS Security ---
  {
    name: "Databricks",
    category: "SaaS Security",
    icon: <FiBox />,
    desc: "Connect directly to your Databricks environment to gain full security visibility and identify data risks.",
    isNew: true
  },
  {
    name: "Microsoft 365",
    category: "SaaS Security",
    icon: <FaMicrosoft />,
    desc: "Connect to your Microsoft 365 environment to identify security risks and configuration gaps across your SaaS stack."
  },

  // --- SAST/DAST ---
  {
    name: "Bright Security",
    category: "SAST/DAST",
    icon: <FiShield />,
    desc: "Enrich Devopstrio with DAST findings from Bright Security to unify application-layer security and cloud posture.",
    isNew: true
  },

  // --- Secured Components ---
  {
    name: "Chainguard",
    category: "Secured Components",
    icon: <FiBox />,
    desc: "Automatically identify container images built on Chainguard's minimal and secured base images."
  },
  {
    name: "Docker",
    category: "Secured Components",
    icon: <FaDocker />,
    desc: "Identify container images built on Docker's hardened Linux distribution to reduce attack surface."
  },
  {
    name: "echo",
    category: "Secured Components",
    icon: <FiZap />,
    desc: "Identify Echo's base images that eliminate container CVEs at the source through automated hardening."
  },
  {
    name: "minimus",
    category: "Secured Components",
    icon: <FiBox />,
    desc: "Identify container images built on Minimus's hardened Linux distribution for secure deployments."
  },
  {
    name: "Resolved Security",
    category: "Secured Components",
    icon: <FiShield />,
    desc: "Validated integration for secured packages and libraries provided by Resolved Security."
  },
  {
    name: "Root",
    category: "Secured Components",
    icon: <FiLayers />,
    desc: "Detect Root's secured images and perform vulnerability assessment against Root's curated security feed."
  },
  {
    name: "Seal Security",
    category: "Secured Components",
    icon: <FiShield />,
    desc: "Identify and validate the use of Seal's secured container images to ensure supply chain integrity."
  },

  // --- Security Data Management ---
  {
    name: "AWS CloudTrail Lake",
    category: "Security Data Management",
    icon: <FaAws />,
    desc: "Inject Devopstrio audit logs into AWS CloudTrail Lake for long-term security investigation and auditing."
  },
  {
    name: "Amazon Q",
    category: "Security Data Management",
    icon: <FaAws />,
    desc: "Explore and query your Devopstrio security issues using natural language with Amazon Q."
  },
  {
    name: "Avalor by Zscaler",
    category: "Security Data Management",
    icon: <FiLayers />,
    desc: "Send Issues, vulnerabilities, and Cloud Configuration Findings into Avalor's security data fabric."
  },
  {
    name: "AWS Security Lake",
    category: "Security Data Management",
    icon: <FaAws />,
    desc: "Integrate Devopstrio as a custom source in AWS Security Lake to normalize and aggregate security findings."
  },
  {
    name: "Blast Security",
    category: "Security Data Management",
    icon: <FiZap />,
    desc: "Send Devopstrio Issues, Configuration Findings, and Resources to Blast for real-time security orchestration."
  },
  {
    name: "Brinqa",
    category: "Security Data Management",
    icon: <FiLayers />,
    desc: "Connect to Brinqa to pull assets and vulnerabilities for prioritized risk management and remediation."
  },
  {
    name: "Censys",
    category: "Security Data Management",
    icon: <FiSearch />,
    desc: "Pull publicly exposed assets into Censys to populate your external attack surface (EASM) inventory."
  },
  {
    name: "Cortex IO",
    category: "Security Data Management",
    icon: <FiActivity />,
    desc: "Ingest Devopstrio issues into Cortex.io to create automated, security-centric scorecards for your organization."
  },
  {
    name: "Jed Security",
    category: "Security Data Management",
    icon: <FiLayers />,
    desc: "Pull Issues and vulnerabilities into Jed Security for cross-tool aggregation and risk scoring."
  },
  {
    name: "Monad",
    category: "Security Data Management",
    icon: <FiActivity />,
    desc: "Create a Devopstrio Connector in Monad to start pulling and normalizing multi-cloud vulnerabilities."
  },
  {
    name: "Opus",
    category: "Security Data Management",
    icon: <FiZap />,
    desc: "Trigger security automation workflows on the Opus no-code platform based on Devopstrio findings."
  },
  {
    name: "Panaseer",
    category: "Security Data Management",
    icon: <FiMonitor />,
    desc: "Send Devopstrio inventory and vulnerabilities for continuous controls monitoring (CCM) and analytics."
  },
  {
    name: "Rescana",
    category: "Security Data Management",
    icon: <FiSearch />,
    desc: "Pull Devopstrio users and exposed resources to populate Rescana's attack surface management platform."
  },
  {
    name: "Resourcely",
    category: "Security Data Management",
    icon: <FiShield />,
    desc: "Pull cloud configuration findings into Resourcely to create automated security guardrails."
  },
  {
    name: "Roadie",
    category: "Security Data Management",
    icon: <FiLayers />,
    desc: "Pull Issues into Roadie (Backstage-based) to prioritize remediation and provide developer context."
  },

  // --- Threat Detection & Intelligence ---
  {
    name: "Amazon GuardDuty",
    category: "Threat Detection & Intelligence",
    icon: <FaAws />,
    desc: "Connect your AWS environment to gain deep visibility into your subscription-level security threats."
  },
  {
    name: "Cado Security",
    category: "Threat Detection & Intelligence",
    icon: <FiSearch />,
    desc: "Use automated forensics capabilities to trigger deep-dive investigations into compromised assets with Cado."
  },
  {
    name: "Cybersixgill",
    category: "Threat Detection & Intelligence",
    icon: <FiActivity />,
    desc: "Pull vulnerability findings into Cybersixgill for real-time dark web intelligence and threat enrichment."
  },
  {
    name: "Cymulate",
    category: "Threat Detection & Intelligence",
    icon: <FiTarget />,
    desc: "Send real-time Defend detections to Cymulate to validate security controls and exposure management."
  },
  {
    name: "Google Threat Intelligence",
    category: "Threat Detection & Intelligence",
    icon: <FaGoogle />,
    desc: "Pull threat intelligence data from GTI (Chronicle) to better understand and mitigate environmental risks."
  },
  {
    name: "Azure Defender for Cloud",
    category: "Threat Detection & Intelligence",
    icon: <FaMicrosoft />,
    desc: "Connect Azure cloud logs to provide additional context and high-fidelity detections related to security events."
  },
  {
    name: "SentinelOne",
    category: "Threat Detection & Intelligence",
    icon: <FiShield />,
    desc: "Enrich platform with runtime findings and pull Issues into SentinelOne's Singularity XDR for unified response."
  },
  {
    name: "Sevco",
    category: "Threat Detection & Intelligence",
    icon: <FiLayers />,
    desc: "Pull resources into Sevco for comprehensive asset tracking and exposure management across the hybrid cloud."
  },
  {
    name: "Tidal",
    category: "Threat Detection & Intelligence",
    icon: <FiActivity />,
    desc: "Pull MITRE ATT&CK compliance reports to organize threats and measure detection coverage against industry frameworks."
  },

  // --- Vulnerability Management & Response ---
  {
    name: "Check Point Threat Exposure Management",
    category: "Vulnerability Management & Response",
    icon: <FiLayers />,
    desc: "Pull Devopstrio Vulnerabilities into Check Point Threat Exposure Management for automated risk mitigation."
  },
  {
    name: "Armis",
    category: "Vulnerability Management & Response",
    icon: <FiActivity />,
    desc: "Send Devopstrio inventory reports to the Armis asset management platform for unified device visibility."
  },
  {
    name: "Armis VIPR",
    category: "Vulnerability Management & Response",
    icon: <FiZap />,
    desc: "Send Devopstrio findings to Armis VIPR to trigger automated security remediation and response workflows."
  },
  {
    name: "ArmorCode",
    category: "Vulnerability Management & Response",
    icon: <FiShield />,
    desc: "Ingest Issues and detected vulnerabilities into ArmorCode for cross-tool risk correlation."
  },
  {
    name: "Averlon",
    category: "Vulnerability Management & Response",
    icon: <FiActivity />,
    desc: "Send vulnerabilities and configuration findings to Averlon for advanced risk quantification."
  },
  {
    name: "Axonius",
    category: "Vulnerability Management & Response",
    icon: <FiLayers />,
    desc: "Comprehensive IT asset inventory to help enforce and validate network security policies."
  },
  {
    name: "Daxa",
    category: "Vulnerability Management & Response",
    icon: <FiShield />,
    desc: "Send Devopstrio vulnerabilities to the Daxa platform for specialized cloud vulnerability management."
  },
  {
    name: "Hackuity",
    category: "Vulnerability Management & Response",
    icon: <FiSearch />,
    desc: "Pull vulnerabilities and resources into Hackuity to prioritize remediation based on risk scores."
  },
  {
    name: "IONIX",
    category: "Vulnerability Management & Response",
    icon: <FiActivity />,
    desc: "Send issues, vulnerabilities, and network exposures to IONIX for attack surface management."
  },
  {
    name: "Ivanti",
    category: "Vulnerability Management & Response",
    icon: <FiShield />,
    desc: "Pull vulnerabilities and cloud findings into Ivanti for prioritized patching and remediation."
  },
  {
    name: "Kenna",
    category: "Vulnerability Management & Response",
    icon: <FiActivity />,
    desc: "Integrate platform vulnerability scanner with Kenna's risk-based vulnerability management tool."
  },
  {
    name: "Kondukto",
    category: "Vulnerability Management & Response",
    icon: <FiZap />,
    desc: "Pull vulnerabilities into Kondukto to triage and remediate security risks across your entire stack."
  },
  {
    name: "Maze",
    category: "Vulnerability Management & Response",
    icon: <FiLayers />,
    desc: "Pull vulnerability findings into Maze for unified cloud vulnerability management and tracking."
  },
  {
    name: "NopSec",
    category: "Vulnerability Management & Response",
    icon: <FiTarget />,
    desc: "Pull Devopstrio issues and vulnerabilities to NopSec for automated prioritization and response."
  },
  {
    name: "Nucleus",
    category: "Vulnerability Management & Response",
    icon: <FiShield />,
    desc: "Pull vulnerabilities and cloud findings into Nucleus Security for unified vulnerability management."
  },
  {
    name: "Precize",
    category: "Vulnerability Management & Response",
    icon: <FiActivity />,
    desc: "Pull Devopstrio Issues and network exposures into Precize for automated risk prioritization."
  },
  {
    name: "Qualys",
    category: "Vulnerability Management & Response",
    icon: <FiShield />,
    desc: "Pull vulnerabilities into Qualys TruRisk management for consolidating and prioritizing risks."
  },
  {
    name: "Seemplicity",
    category: "Vulnerability Management & Response",
    icon: <FiZap />,
    desc: "Send vulnerabilities to the Seemplicity platform for automated remediation operations."
  },
  {
    name: "ServiceNow CVR",
    category: "Vulnerability Management & Response",
    icon: <FiBriefcase />,
    desc: "Pull container image vulnerabilities to ServiceNow CVR to create automated findings and items."
  },
  {
    name: "ServiceNow VR",
    category: "Vulnerability Management & Response",
    icon: <FiBriefcase />,
    desc: "Import and automatically group vulnerabilities findings to remediate critical risks quickly."
  },
  {
    name: "Tenable One (Vulcan)",
    category: "Vulnerability Management & Response",
    icon: <FiShield />,
    desc: "Pull issues, vulnerabilities, and resources into the Tenable One platform for unified exposure management."
  },
  {
    name: "Wabbi",
    category: "Vulnerability Management & Response",
    icon: <FiCode />,
    desc: "Send vulnerabilities to Wabbi to prioritize security findings directly within the SDLC process."
  },

  // --- Vulnerability Scanners ---
  {
    name: "Microsoft Defender VM",
    category: "Vulnerability Scanners",
    icon: <FaMicrosoft />,
    desc: "Connect with Microsoft Defender Vulnerability Management to aggregate and unify vulnerability data.",
    isNew: true
  },
  {
    name: "Qualys VMDR",
    category: "Vulnerability Scanners",
    icon: <FiShield />,
    desc: "Import Qualys VMDR scan results into the platform for unified vulnerability management (Preview)."
  },
  {
    name: "Rapid7 InsightVM",
    category: "Vulnerability Scanners",
    icon: <FiSearch />,
    desc: "Fetch InsightVM's vulnerability findings and related resources to ingest them into the unified platform."
  },
  {
    name: "Tenable Security Center",
    category: "Vulnerability Scanners",
    icon: <FiShield />,
    desc: "Connect Tenable Security Center to create a centralized location for viewing and analyzing vulnerability scans."
  },
  {
    name: "Tenable VM",
    category: "Vulnerability Scanners",
    icon: <FiShield />,
    desc: "Import Tenable VM scan results into the platform for unified, risk-based vulnerability management (Preview)."
  },

  // --- TICKETING & MESSAGING ---
  {
    name: "Azure DevOps",
    category: "Ticketing & Messaging",
    icon: <FaMicrosoft />,
    desc: "Create a new Azure DevOps work item to track and remediate security issues within your development sprints."
  },
  {
    name: "Cisco Webex",
    category: "Ticketing & Messaging",
    icon: <FiActivity />,
    desc: "Notify your Webex teams on platform issues to ensure real-time awareness and collaboration."
  },
  {
    name: "ClickUp",
    category: "Ticketing & Messaging",
    icon: <FiLayers />,
    desc: "Create tasks in ClickUp on detected Issues or Controls for unified project and task management."
  },
  {
    name: "Fresh Service",
    category: "Ticketing & Messaging",
    icon: <FiBriefcase />,
    desc: "Send Issues to Freshservice and automatically generate tickets for your IT service desk."
  },
  {
    name: "Google Chat",
    category: "Ticketing & Messaging",
    icon: <FaGoogle />,
    desc: "Send message with security issue information directly to your specified Google Chat rooms."
  },
  {
    name: "Jira",
    category: "Ticketing & Messaging",
    icon: <FiActivity />,
    desc: "Open and update tickets on security issues in your projects to ensure end-to-end tracking.",
    trending: true
  },
  {
    name: "Linear",
    category: "Ticketing & Messaging",
    icon: <FiTarget />,
    desc: "Open and update Linear issues based on security findings for modern engineering teams."
  },
  {
    name: "Microsoft Teams",
    category: "Ticketing & Messaging",
    icon: <FaMicrosoft />,
    desc: "Alert your Teams channels on detected Issues to facilitate rapid response and discussion."
  },
  {
    name: "monday.com",
    category: "Ticketing & Messaging",
    icon: <FiLayers />,
    desc: "Send security issues to the monday.com work management platform for streamlined remediation tracking."
  },
  {
    name: "Opsgenie",
    category: "Ticketing & Messaging",
    icon: <FiActivity />,
    desc: "Create and close alerts in Opsgenie for detected platform issues to manage on-call rotations."
  },
  {
    name: "PagerDuty",
    category: "Ticketing & Messaging",
    icon: <FiTarget />,
    desc: "Create and resolve incidents in your PagerDuty service on detected issues to reduce MTTR."
  },
  {
    name: "ServiceNow ITSM",
    category: "Ticketing & Messaging",
    icon: <FiBriefcase />,
    desc: "Open and update a ServiceNow ticket in one of your tables for enterprise IT governance."
  },
  {
    name: "Slack",
    category: "Ticketing & Messaging",
    icon: <FiZap />,
    desc: "Send Slack messages to your channels using SlackBot for real-time security alerting.",
    trending: true
  },
  {
    name: "Zendesk",
    category: "Ticketing & Messaging",
    icon: <FiSearch />,
    desc: "Open and update tickets on platform issues in your projects for customer-centric security response."
  },

  // --- SIEM ---
  {
    name: "Anvilogic",
    category: "SIEM",
    icon: <FiZap />,
    desc: "Pull Devopstrio Issues in Anvilogic to run threat detections across multiple security tools."
  },
  {
    name: "AWS Security Hub",
    category: "SIEM",
    icon: <FaAws />,
    desc: "Send Issues notification to Security Hub to centralize cloud security posture management."
  },
  {
    name: "Datadog",
    category: "SIEM",
    icon: <FiMonitor />,
    desc: "Pull Devopstrio Issues and audit logs into Datadog SIEM for unified log management and investigations."
  },
  {
    name: "Devo",
    category: "SIEM",
    icon: <FiActivity />,
    desc: "Send issues, vulnerabilities, cloud configuration findings, and audit logs to Devo for high-scale analytics."
  },
  {
    name: "Exabeam",
    category: "SIEM",
    icon: <FiSearch />,
    desc: "Push Devopstrio Issues to your Exabeam instance proactively for behavioral analytics and threat detection."
  },
  {
    name: "Google Security Operations",
    category: "SIEM",
    icon: <FaGoogle />,
    desc: "Export the Devopstrio issues to your Google Chronicle SIEM for planetary-scale security analytics."
  },
  {
    name: "Hunters",
    category: "SIEM",
    icon: <FiTarget />,
    desc: "Ingest Devopstrio Issues into Hunters SOC platform for autonomous threat hunting and correlation."
  },
  {
    name: "IBM QRadar SIEM",
    category: "SIEM",
    icon: <FiShield />,
    desc: "Set Devopstrio as a data log source to integrate Devopstrio issues into your QRadar cloud security workflows."
  },
  {
    name: "Microsoft Sentinel",
    category: "SIEM",
    icon: <FaMicrosoft />,
    desc: "Connect Devopstrio with Azure Sentinel to ingest Devopstrio Issues, Detections, and Audit Logs."
  },
  {
    name: "Panther Labs",
    category: "SIEM",
    icon: <FiShield />,
    desc: "Send Devopstrio vulnerabilities, audit logs, and Issues to Panther for centralized, code-driven investigation."
  },
  {
    name: "Securonix",
    category: "SIEM",
    icon: <FiActivity />,
    desc: "Send Issues and vulnerabilities to Securonix's SIEM platform for next-gen threat detection."
  },
  {
    name: "Sekoia",
    category: "SIEM",
    icon: <FiShield />,
    desc: "Send issues, vulnerabilities, cloud configuration findings, and audit logs to Sekoia for unified monitoring."
  },
  {
    name: "Splunk",
    category: "SIEM",
    icon: <FiActivity />,
    desc: "Send Issues to get insights into threats, vulnerabilities, and identity information in Splunk."
  },
  {
    name: "Sumo Logic",
    category: "SIEM",
    icon: <FiLayers />,
    desc: "Send Issues to get insights into threats, vulnerabilities, and identity information across your cloud stack."
  },
  // --- SOAR & Automation ---
  {
    name: "Blinkops",
    category: "SOAR & Automation",
    icon: <FiZap />,
    desc: "Automate your security operations with the BlinkOps integration for rapid incident response."
  },
  {
    name: "Botprise",
    category: "SOAR & Automation",
    icon: <FiMonitor />,
    desc: "Send Devopstrio Issues to Botprise to create no-code automation workflows for cloud remediation."
  },
  {
    name: "Cortex XSOAR",
    category: "SOAR & Automation",
    icon: <FiShield />,
    desc: "Automate and orchestrate your XSOAR security operations based on real-time platform findings."
  },
  {
    name: "Cyware",
    category: "SOAR & Automation",
    icon: <FiLayers />,
    desc: "Send Devopstrio Issues to the Cyware portal for unified threat intelligence and collaboration."
  },
  {
    name: "D3 Security",
    category: "SOAR & Automation",
    icon: <FiActivity />,
    desc: "Pull Issues to D3 to run remediation playbooks and automatically update statuses in the platform."
  },
  {
    name: "DevOcean",
    category: "SOAR & Automation",
    icon: <FiZap />,
    desc: "Send vulnerabilities and Issues to DevOcean for automated cloud security remediation."
  },
  {
    name: "Dropzone AI (API)",
    category: "SOAR & Automation",
    icon: <FiActivity />,
    desc: "Send Devopstrio Issues, Threats, and Detections to Dropzone AI via API for automated investigation."
  },
  {
    name: "Dropzone AI (Webhook)",
    category: "SOAR & Automation",
    icon: <FiZap />,
    desc: "Send real-time Issues and Detections to Dropzone AI via Webhook for immediate triage."
  },
  {
    name: "Exaforce",
    category: "SOAR & Automation",
    icon: <FiShield />,
    desc: "Send Devopstrio Threats and Findings to the Exaforce platform for automated SOC triage and response.",
    isNew: true
  },
  {
    name: "IBM QRadar SOAR",
    category: "SOAR & Automation",
    icon: <FiShield />,
    desc: "Pull Issues and vulnerabilities into QRadar SOAR to execute complex remediation playbooks."
  },
  {
    name: "Intezer",
    category: "SOAR & Automation",
    icon: <FiSearch />,
    desc: "Push Devopstrio detections to Intezer for autonomous triage, forensics, and incident investigation."
  },
  {
    name: "Prophet Security",
    category: "SOAR & Automation",
    icon: <FiActivity />,
    desc: "Pull vulnerabilities and inventory into Prophet to automate security investigations and reporting."
  },
  {
    name: "Swimlane",
    category: "SOAR & Automation",
    icon: <FiZap />,
    desc: "Send Devopstrio Issues, Findings, and Resources to Swimlane for low-code security automation."
  },
  {
    name: "Tines",
    category: "SOAR & Automation",
    icon: <FiLayers />,
    desc: "Ingest security data into Tines no-code automation platform for flexible security workflows."
  },
  {
    name: "Torq",
    category: "SOAR & Automation",
    icon: <FiZap />,
    desc: "Create security automation flows triggered by Devopstrio Issues for hyper-automated cloud security."
  },
  {
    name: "Workato",
    category: "SOAR & Automation",
    icon: <FiActivity />,
    desc: "Pull Devopstrio Issues, Findings, and resources into Workato to orchestrate enterprise-wide automation."
  },

  // --- SSPM ---
  {
    name: "Adaptive Shield",
    category: "SSPM",
    icon: <FiShield />,
    desc: "Integrate with Adaptive Shield by Crowdstrike to manage Devopstrio users, roles, and configuration risks."
  },
  {
    name: "AppOmni",
    category: "SSPM",
    icon: <FiMonitor />,
    desc: "Integrate Devopstrio to AppOmni to manage users, roles, and security risks across your SaaS tenant."
  },
  {
    name: "Obsidian Security",
    category: "SSPM",
    icon: <FiLayers />,
    desc: "Pull Devopstrio users and audit logs into Obsidian for protecting and monitoring your cloud security tenant."
  },
  {
    name: "Reco",
    category: "SSPM",
    icon: <FiShield />,
    desc: "Integrate with Reco to manage users, roles, and security risks with automated posture management."
  },
  {
    name: "Savvy Security",
    category: "SSPM",
    icon: <FiUser />,
    desc: "Pull Devopstrio users and audit logs into Savvy Security by Sailpoint for identity-centric posture management."
  },
  {
    name: "Valence Security",
    category: "SSPM",
    icon: <FiShield />,
    desc: "Integrate with Valence to manage users and associated risks across your SaaS and cloud platforms."
  },
];

const ProvideServices = () => {
  useSEO(
    "Ecosystem & Integrations Services | Devopstrio",
    "Explore 268+ enterprise integrations Services across 30+ categories. We secure and accelerate your entire delivery pipeline from code to cloud."
  );

  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = React.useMemo(() => {
    // Filter by search for "real-time" counts in the sidebar
    const searchFiltered = integrations.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const counts = searchFiltered.reduce((acc, item) => {
      acc[item.category] = (acc[item.category] || 0) + 1;
      return acc;
    }, {});

    // Maintain a stable category list from the full data set
    const allCats = [...new Set(integrations.map(i => i.category))].sort();

    const sortedCats = allCats.map(name => ({
      name,
      count: counts[name] || 0
    }));

    return [
      { name: "All", count: searchFiltered.length },
      ...sortedCats
    ];
  }, [searchQuery]);

  const filteredIntegrations = React.useMemo(() => {
    return integrations.filter(item => {
      const matchesCategory = activeCategory === "All" || item.category === activeCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const popularIntegrations = React.useMemo(() => {
    return integrations.filter(i => i.trending).slice(0, 3);
  }, []);

  return (
    <div className={`ps-Devopstrio-container ${isVisible ? "ps-fade-in" : ""}`}>


      {/* 1. HERO CARD */}
      <Serviceshero />

      {/* 2. Title Card */}
      <section className="ps-hero-card">
        <div className="ps-hero-card-content">
          <div className="ps-badge">
            <FiZap /> <span>Ecosystem v2.0</span>
          </div>
          <h1>Connect Your Entire <br /><span className="ps-gradient-text">Security Stack</span></h1>
          <p>Devopstrio integrates services with 268+ tools to give you full visibility and control over your cloud-native environment.</p>
        </div>
      </section>

      {/* 2. EXPLORER CONTAINER */}
      <div className="ps-explorer-container">
        {/* HEADER / SEARCH AREA */}
        <header className="ps-Devopstrio-header">
          <div className="ps-Devopstrio-search-bar">
            <FiSearch className="ps-Devopstrio-search-icon" />
            <input
              type="text"
              placeholder="Search integrations Services..."
              className="ps-Devopstrio-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </header>

        <div className="ps-Devopstrio-layout">
          {/* SIDEBAR */}
          <aside className="ps-Devopstrio-sidebar">
            <div className="ps-Devopstrio-sidebar-label">Categories</div>
            <nav className="ps-Devopstrio-nav">
              {categories.map((cat) => (
                <button
                  key={cat.name}
                  className={`ps-Devopstrio-nav-item ${activeCategory === cat.name ? "active" : ""}`}
                  onClick={() => setActiveCategory(cat.name)}
                >
                  <span className="cat-name">{cat.name}</span>
                  <span className="cat-count">{cat.count}</span>
                </button>
              ))}
            </nav>
          </aside>

          {/* MAIN CONTENT */}
          <main className="ps-Devopstrio-main">
            {activeCategory === "All" && searchQuery === "" ? (
              <div className="ps-Devopstrio-all-view">
                <section className="ps-Devopstrio-popular-section">
                  <h2 className="ps-Devopstrio-group-title">Popular Integrations Services</h2>
                  <div className="ps-Devopstrio-popular-grid">
                    {popularIntegrations.map((item, idx) => (
                      <div key={idx} className="ps-Devopstrio-popular-card">
                        <div className="ps-Devopstrio-popular-card-logo">
                          {item.icon}
                        </div>
                        <div className="ps-Devopstrio-popular-card-content">
                          <h3>{item.name}</h3>
                          <p className="ps-Devopstrio-popular-desc">{item.desc}</p>
                          <span className="ps-Devopstrio-popular-cat">{item.category}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* GROUPED CATEGORIES */}
                {categories.filter(c => c.name !== "All").map((cat) => {
                  const catIntegrations = integrations.filter(i =>
                    i.category === cat.name &&
                    i.name.toLowerCase().includes(searchQuery.toLowerCase())
                  );

                  if (catIntegrations.length === 0) return null;

                  return (
                    <section key={cat.name} className="ps-Devopstrio-category-group">
                      <h2 className="ps-Devopstrio-group-title">{cat.name}</h2>
                      <div className="ps-Devopstrio-grid">
                        {catIntegrations.map((item, idx) => (
                          <div key={idx} className="ps-Devopstrio-card">
                            <div className="ps-Devopstrio-card-logo">
                              {item.icon}
                            </div>
                            <div className="ps-Devopstrio-card-content">
                              <div className="ps-Devopstrio-card-top">
                                <h3 className="ps-Devopstrio-card-name">
                                  {item.name} <FiArrowRight className="ps-Devopstrio-arrow" />
                                </h3>
                                {item.isNew && <span className="ps-Devopstrio-new-badge">NEW</span>}
                              </div>
                              <p className="ps-Devopstrio-card-desc">{item.desc}</p>
                              <span className="ps-Devopstrio-card-cat">{item.category}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>
                  );
                })}
              </div>
            ) : (
              <div className="ps-Devopstrio-single-view">
                <h1 className="ps-Devopstrio-section-title">{activeCategory}</h1>
                <div className="ps-Devopstrio-grid">
                  {filteredIntegrations.map((item, idx) => (
                    <div key={idx} className="ps-Devopstrio-card">
                      <div className="ps-Devopstrio-card-logo">
                        {item.icon}
                      </div>
                      <div className="ps-Devopstrio-card-content">
                        <div className="ps-Devopstrio-card-top">
                          <h3 className="ps-Devopstrio-card-name">
                            {item.name} <FiArrowRight className="ps-Devopstrio-arrow" />
                          </h3>
                          {item.isNew && <span className="ps-Devopstrio-new-badge">NEW</span>}
                          {item.trending && <span className="ps-Devopstrio-trend-badge">Popular</span>}
                        </div>
                        <p className="ps-Devopstrio-card-desc">{item.desc}</p>
                        <span className="ps-Devopstrio-card-cat">{item.category}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {filteredIntegrations.length === 0 && (
              <div className="ps-Devopstrio-empty">
                <FiSearch size={48} color="#ce2453" />
                <p>No integrations Services found matching your search.</p>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* NewsLetter */}
      <div style={{ margin: "0 auto", maxWidth: "1240px" }}>
        <Newsletter />
      </div>
      {/* Cta */}
      <Cta />
    </div>
  );
};

export default ProvideServices;
