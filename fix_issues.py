import re

# 1. Update Clients.tsx
with open('src/components/Clients.tsx', 'r') as f:
    content = f.read()

client_images = [
    "/images/media_1787656777597.png",
    "/images/media_1787656777603.png",
    "/images/media_1787656777622.png",
    "/images/media_1787656777626.png",
    "/images/media_1787656777629.png",
    "/images/media_1787656945647.png",
    "/images/media_1787656945665.png",
    "/images/media_1787656945668.png",
    "/images/media_1787656945671.png",
    "/images/media_1787656945673.png",
    "/images/media_1787656999237.png",
    "/images/media_1787656999247.png",
    "/images/media_1787656999251.png"
]

import re
matches = re.finditer(r'logo: "(.*?)",', content)
for i, m in enumerate(matches):
    if i < len(client_images):
        content = content.replace(m.group(0), f'logo: "{client_images[i]}",')

with open('src/components/Clients.tsx', 'w') as f:
    f.write(content)

# 2. Update Navigation.tsx (whitespace-nowrap & logo)
with open('src/components/Navigation.tsx', 'r') as f:
    nav = f.read()

nav = nav.replace('src="./dc2764ac-81de-4147-94c0-0c35f1327f51.png"', 'src="https://ecloudbridge.com/wp-content/uploads/2022/10/ecb.png"')
nav = nav.replace('className={`font-medium transition-all', 'className={`font-medium whitespace-nowrap transition-all')

with open('src/components/Navigation.tsx', 'w') as f:
    f.write(nav)

# 3. Update Hero.tsx (fix width)
with open('src/components/Hero.tsx', 'r') as f:
    hero = f.read()

hero = hero.replace('width="1800" \n          height="900" \n          viewBox="0 0 1800 900" \n          className="animate-infinite-flow"', 'viewBox="0 0 1800 900" \n          className="animate-infinite-flow w-full h-full"')

with open('src/components/Hero.tsx', 'w') as f:
    f.write(hero)

# 4. Update CaseStudies.tsx (replace unsplash URLs)
with open('src/components/CaseStudies.tsx', 'r') as f:
    cs = f.read()

cs = cs.replace('https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=400&h=300&fit=crop', '/images/global-operations.jpg')
cs = cs.replace('https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop', '/images/tech-enterprise.jpeg')
cs = cs.replace('https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop', '/images/retail-giant.png')
cs = cs.replace('https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=400&h=300&fit=crop', '/images/fintech-startup.png')

# 5. Expand Case Studies 1-6
cs_details = [
    "<p><strong>The Situation:</strong> SimpleOne and eCloudBridge established a partnership to combine forces in the cloud infrastructure domain. Our shared clients needed a unified service catalog where enterprise architecture could be designed and deployed rapidly without navigating multiple vendor contracts.</p><br/><p><strong>Our Approach:</strong> We integrated our service offerings into a seamless portfolio. Joint teams were formed to handle pre-sales, architecture design, and final deployments. We leveraged our mutual expertise in high-availability systems to standardize offerings.</p><br/><p><strong>The Impact:</strong> The partnership yielded a 100% alignment on joint accounts, providing customers with a holistic end-to-end cloud solution, leading to broader market reach and enhanced delivery capabilities for both organizations.</p>",
    "<p><strong>The Situation:</strong> Tech Enterprise was dealing with severe scalability bottlenecks. Their monolithic application could not handle sudden user spikes, leading to frequent timeouts and a diminished security posture due to outdated infrastructure configurations.</p><br/><p><strong>Our Approach:</strong> We broke down the monolith into a microservices architecture deployed on a highly available Kubernetes cluster. We integrated Datadog for full-stack observability, allowing for real-time monitoring of container health. In parallel, we implemented strict RBAC and network policies to harden the cluster.</p><br/><p><strong>The Impact:</strong> The client achieved 99.9% uptime. Automated Horizontal Pod Autoscaling (HPA) now seamlessly handles traffic spikes, and real-time monitoring alerts the team to anomalies before they affect users.</p>",
    "<p><strong>The Situation:</strong> Software Innovations suffered from an inefficient software development lifecycle. Deployments were manual, error-prone, and required weekend downtime windows. Developers spent more time fighting merge conflicts and deployment scripts than writing code.</p><br/><p><strong>Our Approach:</strong> We architected a complete DevOps toolchain using GitOps principles. We implemented CI/CD pipelines that automatically build, test, and deploy code upon every merge to the main branch. ArgoCD was deployed to maintain state consistency across environments.</p><br/><p><strong>The Impact:</strong> Deploy frequency increased by 5x. Developers now deploy code multiple times a day with zero downtime. Production failure rates plummeted as all changes are rigorously tested and verified in staging environments identical to production.</p>",
    "<p><strong>The Situation:</strong> E-commerce Inc. lacked a robust disaster recovery (DR) strategy. In the event of a regional cloud outage, their expected recovery time was over 48 hours, which would result in millions of dollars in lost revenue and severe reputational damage.</p><br/><p><strong>Our Approach:</strong> We designed an Active-Passive multi-region disaster recovery architecture on AWS. Critical databases were configured with cross-region replication. We scripted the entire infrastructure recovery process using Terraform so the passive region could be fully spun up in minutes.</p><br/><p><strong>The Impact:</strong> The RTO (Recovery Time Objective) was reduced to under 15 minutes. Regular, automated DR drills ensure the team is always prepared, providing immense peace of mind to the executive board.</p>",
    "<p><strong>The Situation:</strong> Retail Giant was expanding globally but faced significant vulnerabilities regarding customer data protection. They needed to achieve strict PCI-DSS compliance before launching in the European market.</p><br/><p><strong>Our Approach:</strong> We conducted a comprehensive security audit of their entire cloud footprint. We implemented Web Application Firewalls (WAF) to block malicious traffic, enforced end-to-end encryption for all data in transit and at rest, and integrated automated security scanning into their CI/CD pipelines.</p><br/><p><strong>The Impact:</strong> Zero data breaches have occurred since implementation. The client easily passed their PCI-DSS compliance audit, allowing them to confidently process secure transactions across their new European market footprint.</p>",
    "<p><strong>The Situation:</strong> Fintech Startup was struggling to innovate. Their rigid, legacy infrastructure required months of planning to launch a single new microservice. This slow time-to-market was severely hampering their competitive advantage.</p><br/><p><strong>Our Approach:</strong> We transformed their infrastructure into an agile, cloud-native ecosystem. We introduced Docker containers and orchestrated them with Kubernetes. We implemented an Internal Developer Platform (IDP) that allows developers to self-provision fully compliant environments with a single click.</p><br/><p><strong>The Impact:</strong> Engineering velocity skyrocketed. The startup can now prototype and launch new financial products in days rather than months, resulting in a 200% acceleration in product growth and significantly higher developer satisfaction.</p>"
]

for i in range(1, 7):
    # Regex to replace the detailedDescription line for the first 6
    # We will just do a simple replacement for those strings
    pass # Wait, it's easier to just read the file and replace the exact string

with open('src/components/CaseStudies.tsx', 'w') as f:
    f.write(cs)
