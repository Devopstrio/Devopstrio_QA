import React from "react";
import "./Integrations.css";

// Import technology logos
import GCPLogo from "../../assets/images/gcpLogo.png";
import AzureLogo from "../../assets/images/azureLogo.png";
import AWSLogo from "../../assets/images/awslogo.jpg";
import DockerLogo from "../../assets/images/dockerLogo.png";
import KubernetesLogo from "../../assets/images/kubernetesLogo.png";
import MicrosoftLogo from "../../assets/images/Microsoft.png";
import JenkinsLogo from "../../assets/images/Product_Hunt.png";
import TerraformLogo from "../../assets/images/OWASP.png";
import PrometheusLogo from "../../assets/images/Broadcom.png";
import GrafanaLogo from "../../assets/images/Codebuddies.png";
import AnsibleLogo from "../../assets/images/Fosdem.png";
import GitLabLogo from "../../assets/images/GitLab.png";

// Additional logos for repetition
import AzureLogo2 from "../../assets/images/azureLogo.png";
import GCPLogo2 from "../../assets/images/gcpLogo.png";
import DockerLogo2 from "../../assets/images/dockerLogo.png";
import KubernetesLogo2 from "../../assets/images/kubernetesLogo.png";
import MicrosoftLogo2 from "../../assets/images/Microsoft.png";

const Integrations = () => {
  return (
    <section className="dt-integrations-section">
      <div className="dt-integrations-left">
        <span className="dt-badge">TECHNOLOGY PARTNERS</span>
        <h2>Integrations</h2>
        <p>
          Leverage Devopstrio extensive library of pre-built integrations with
          leading cloud, container, and DevOps tools to make your data flow
          seamlessly across your IT environment.
        </p>
        <button className="dt-integrations-btn">Explore Integrations</button>
      </div>

      <div className="dt-integrations-right">
        {/* Orbit 1 */}
        <div className="dt-orbit dt-orbit-1">
          <img src={AWSLogo} alt="AWS" className="dt-logo-1" />
          <img src={AzureLogo} alt="Azure" className="dt-logo-2" />
          <img src={GCPLogo} alt="GCP" className="dt-logo-3" />
          <img src={DockerLogo} alt="Docker" className="dt-logo-4" />
        </div>

        {/* Orbit 2 */}
        <div className="dt-orbit dt-orbit-2">
          <img src={KubernetesLogo} alt="Kubernetes" className="dt-logo-1" />
          <img src={MicrosoftLogo} alt="Microsoft" className="dt-logo-2" />
          <img src={JenkinsLogo} alt="Jenkins" className="dt-logo-3" />
          <img src={GitLabLogo} alt="GitLab" className="dt-logo-4" />
        </div>

        {/* Orbit 3 */}
        <div className="dt-orbit dt-orbit-3">
          <img src={TerraformLogo} alt="Terraform" className="dt-logo-1" />
          <img src={PrometheusLogo} alt="Prometheus" className="dt-logo-2" />
          <img src={GrafanaLogo} alt="Grafana" className="dt-logo-3" />
          <img src={AnsibleLogo} alt="Ansible" className="dt-logo-4" />
        </div>

        {/* Orbit 4 */}
        <div className="dt-orbit dt-orbit-4">
          <img src={GCPLogo2} alt="GCP" className="dt-logo-1" />
          <img src={DockerLogo2} alt="Docker" className="dt-logo-2" />
          <img src={KubernetesLogo2} alt="Kubernetes" className="dt-logo-3" />
          <img src={MicrosoftLogo2} alt="Microsoft" className="dt-logo-4" />
        </div>
      </div>
    </section>
  );
};

export default Integrations;
