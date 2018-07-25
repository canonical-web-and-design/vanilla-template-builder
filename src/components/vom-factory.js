import React from 'react';
import { Strip, StripRow } from 'vanilla-framework-react';

export default class VOMFactory {
  static build(data) {
    switch (data) {
      case 'strip-6-6':
        return (
          <Strip>
            <StripRow>
              <div className="col-6">
                <h2>In partnership with Google GKE</h2>
                <p>Google and Canonical together enable smooth hybrid operations between Google’s Container Engine (GKE) service with Ubuntu worker nodes, and Canonical’s Distribution of Kubernetes®*. Choose Canonical’s Kubernetes to be sure your container workloads can migrate to GKE thanks to our kernel-to-k8s alignment.</p>
                <p><a href="">Try GKE with Ubuntu now</a></p>
              </div>
              <div class="col-6">
                <img src="https://assets.ubuntu.com/v1/ba70dd8a-gce.png?w=380" alt="Google Container Engine" />
              </div>
            </StripRow>
          </Strip>
        );
      case 'strip-8-4':
        return (
          <Strip>
            <StripRow>
              <div className="col-8">
                <h2>In partnership with Google GKE</h2>
                <p>Google and Canonical together enable smooth hybrid operations between Google’s Container Engine (GKE) service with Ubuntu worker nodes, and Canonical’s Distribution of Kubernetes®*. Choose Canonical’s Kubernetes to be sure your container workloads can migrate to GKE thanks to our kernel-to-k8s alignment.</p>
                <p><a href="">Try GKE with Ubuntu now</a></p>
              </div>
              <div class="col-4">
                <img src="https://assets.ubuntu.com/v1/ba70dd8a-gce.png?w=380" alt="Google Container Engine" />
              </div>
            </StripRow>
          </Strip>
        );
      case 'strip-4-8':
        return (
          <Strip>
            <StripRow>
              <div className="col-4">
                <img src="https://assets.ubuntu.com/v1/ba70dd8a-gce.png?w=380" alt="Google Container Engine" />
              </div>
              <div class="col-8">
                <h2>In partnership with Google GKE</h2>
                <p>Google and Canonical together enable smooth hybrid operations between Google’s Container Engine (GKE) service with Ubuntu worker nodes, and Canonical’s Distribution of Kubernetes®*. Choose Canonical’s Kubernetes to be sure your container workloads can migrate to GKE thanks to our kernel-to-k8s alignment.</p>
                <p><a href="">Try GKE with Ubuntu now</a></p>
              </div>
            </StripRow>
          </Strip>
        );
      default:
        return undefined;
    }
  }
}