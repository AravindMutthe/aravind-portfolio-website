import type { Metadata } from "next";
import Link from "next/link";
import AtlasTabs from "@/components/AtlasTabs";
import AtlasFlow from "@/components/AtlasFlow";
import AtlasDiagram from "@/components/AtlasDiagram";

export const metadata: Metadata = {
  title: "☸️ Physical networks, Kubernetes networking — Atlas",
  description:
    "B011: from modem and router to cluster datapaths, ingress, CNI, CSI, load balancers and the access–distribution–core design, with exact analogies and their limits.",
};

export default function KubernetesNetworks() {
  return (
    <div className="atlas-wrap">
      <Link href="/atlas">← Atlas index</Link>
      <p className="atlas-eyebrow" style={{ marginTop: 20 }}>B011 · Original pages 04–07</p>
      <h1 className="atlas-hero">☸️ Physical networks, Kubernetes networking</h1>
      <p className="atlas-lead">
        From modem and router to cluster datapaths, ingress, CNI, CSI, load
        balancers and the access–distribution–core design. Original handwriting
        retained, corrections clearly labeled, physical ↔ virtual crosswalk
        kept honest: an analogy is a hypothesis, followed by the closest real
        implementation and its limits.
      </p>
      <AtlasTabs tabs={[
        { label: "✍️ Original", content: <p>B011-P04: Kubernetes equivalents for modem, firewall, router, switch, server NIC, physical media, VLAN and LAG. B011-P05: storage-area-network adapters and the application delivery controller. B011-P06: guided and unguided media, ISP-to-Wi-Fi traffic chain and device responsibilities. B011-P07: ordered roles of modem/ONT, edge router, firewall, core, distribution, access, endpoints and application security.</p> },
        { label: "🧭 Editorial", content: <p>Each original analogy is retained as a hypothesis, then the closest real implementation and its limits. A CNI is a plugin interface, not itself a cable; a Kubernetes Service is a virtual service abstraction, not an Ethernet switch.</p> },
        { label: "✨ AI explanations", content: <p>Worked path below: laptop to application Pod, hop by hop, distinguishing at each hop the physical signal, link-layer framing, IP forwarding, transport connection, TLS security and application request.</p> },
        { label: "✅ Verify", content: <p>Corrections: a router does not necessarily perform NAT; NAT is an independent function. Fiber carries modulated light rather than requiring a classic analog telephone modem. A Service is not an Ethernet switch; ClusterIP is not inherently a load balancer for all protocols. Namespace alone does not isolate network traffic — use policies, routes and security controls. CSI is not a SAN controller or a replacement for Fibre Channel.</p> },
      ]} />

      <h2>🏢 01 · The physical enterprise network</h2>
      <AtlasFlow steps={[
        { emoji: "🌐", title: "ISP network / last mile", text: "Fiber, DSL or cellular access.", example: "Terminates at ONT / modem / cellular gateway." },
        { emoji: "🔀", title: "Edge router", text: "L3 forwarding, default route, BGP or static routing, optional NAT." },
        { emoji: "🛡️", title: "Firewall / security zones", text: "Policy, stateful inspection, DMZ boundaries." },
        { emoji: "🧱", title: "Core switch pair", text: "Resilient high-capacity campus backbone." },
        { emoji: "🗂️", title: "Distribution switches", text: "Aggregation, routing boundaries, ACLs as designed." },
        { emoji: "🔌", title: "Access switches", text: "Endpoints, VLAN membership, PoE, Wi-Fi AP uplinks, server NIC/HBA, industrial gateway for OT/IoT segmentation." },
      ]} />
      <p>Qualification: this is a teaching topology, not a required universal sequence. Real designs may collapse core and distribution, place firewalls in different positions, or combine ONT, router, firewall and AP into one appliance.</p>

      <h2>☸️ 02 · Kubernetes network path and exact analogies</h2>
      <p>External client → DNS → public IP / cloud load balancer → Gateway API or Ingress controller (L7, where configured) → Kubernetes Service (stable virtual frontend / endpoint selection) → Pod IP on worker node → container listening socket. Above that, the CNI plugin configures pod connectivity: Linux routes, veth pairs, bridges, eBPF or overlay as implementation requires. NetworkPolicy, if enforced by the chosen CNI, filters allowed traffic.</p>
      <div className="atlas-grid">
        {[
          ["📡 Modem → Ingress / cloud gateway", "Both may be near an entry boundary; Ingress exposes and routes application traffic. It does not convert DSL, optical or radio physical signals."],
          ["🛡️ Firewall → NetworkPolicy / service mesh", "NetworkPolicy controls selected pod traffic; meshes may add identity, mTLS and L7 authorization. Neither automatically replaces a perimeter NGFW."],
          ["🔀 Router → kube-proxy / CNI routing", "CNI routes, kernel forwarding and kube-proxy/eBPF service translation can steer packets. kube-proxy is not a general WAN router."],
          ["🧱 Switch → Service / bridge", "Linux bridges switch L2 frames; Services expose stable L4 virtual destinations. A Service is not an Ethernet switch."],
          ["🔌 NIC → eth0 inside Pod", "Pod interfaces are commonly veth-backed. eth0 in a Pod is usually virtual, not a dedicated physical NIC."],
          ["📶 Physical media → overlay VXLAN", "Overlays encapsulate traffic over an underlay built from real NICs, switches and links. VXLAN is optional; not every CNI uses it."],
          ["🏷️ VLAN → namespace", "Both help organize boundaries. Namespace alone does not isolate network traffic."],
          ["🔗 LAG → ReplicaSet / Service", "Both aggregate for capacity or availability, by different mechanisms — do not conflate the two."],
        ].map(([t, d]) => (
          <div key={t} className="atlas-card"><h3>{t}</h3><p>{d}</p></div>
        ))}
      </div>

      <h2>⚖️ 03 · ADC: network delivery, application delivery, observability</h2>
      <p>The note correctly separates network traffic (packets, TCP/UDP) from application traffic (HTTP/HTTPS requests) and monitoring. An application delivery controller may terminate TLS, perform L4/L7 load balancing, health checks, persistence, request routing and sometimes WAF protections. Modern implementations include dedicated appliances, software reverse proxies and cloud managed load balancers. Client HTTPS request → public listener / ADC → TLS termination (optional) → policy + routing + health-based backend selection → backend pool → response via ADC or configured return path. Observability: metrics + logs + traces + health checks. Correction: DPDK is a userspace packet-processing framework, not a universal requirement for ADCs; ADCs can be built on ordinary kernel networking, with eBPF, DPDK, ASICs or SmartNICs as optional acceleration.</p>

      <h2>💾 04 · SAN, iSCSI, Fibre Channel and CSI</h2>
      <p>iSCSI carries SCSI over TCP/IP; Fibre Channel provides a dedicated storage transport; HBAs connect hosts to storage fabrics. CSI is a standardized interface by which container orchestrators request provisioning, attachment and mounting through storage drivers. Application in Pod → filesystem → PersistentVolumeClaim → Kubernetes CSI driver → storage provisioner → block/file storage backend → possibly iSCSI / FC / NVMe-oF / NFS / cloud storage → physical disks / SSDs. CSI is not a SAN controller and does not replace Fibre Channel; it integrates Kubernetes with whichever storage backend the CSI driver supports.</p>

      <h2>📶 05 · Physical vs virtual media</h2>
      <p>Guided: copper twisted pair, coaxial and fiber constrain signal propagation along a material path. Unguided: radio and other wireless electromagnetic propagation use space as the medium. Virtual: VLANs, VRFs, tunnels, VXLAN overlays, veth pairs, Linux bridges, virtual switches, VPNs and software-defined policies are logical constructs implemented on physical hardware. VLANs segment Layer-2 broadcast domains; VRFs isolate routing tables; VPNs can provide protected tunnels; VXLAN encapsulates L2 segments over an L3 underlay; LAG bonds links into one logical aggregation; SSIDs identify Wi-Fi networks, but SSIDs alone do not guarantee isolation.</p>

      <AtlasDiagram variant="packet" />

      <h2>📦 06 · Trace a packet: laptop to application Pod</h2>
      <AtlasFlow steps={[
        { emoji: "💻", title: "Laptop app", text: "Creates an HTTPS request; OS TCP/IP stack; laptop Wi-Fi NIC; radio frames." },
        { emoji: "📶", title: "AP → access → distribution/core", text: "Access switch, distribution and core, firewall, edge router, ISP, Internet." },
        { emoji: "🌐", title: "Public load balancer", text: "Gateway / Ingress, then Service backend selection." },
        { emoji: "☸️", title: "Worker node → CNI → Pod", text: "Worker-node NIC, CNI datapath, Pod eth0, socket, application process." },
      ]} />
      <p>A Service can use iptables, IPVS or eBPF depending on cluster configuration; not every packet necessarily passes through every named component.</p>

      <h2>🧪 07 · Cross-links and review questions</h2>
      <p>Connects to Chapter 03 (silicon/NIC), Chapter 10 (storage/memory), Chapter 11 (interfaces, networking) and Chapter 12 (source-by-source review). Suggested lab sequence: inspect <code>ip link</code> and <code>ip route</code> on Linux; create two namespaces and a veth pair; configure a Linux bridge; deploy two Pods and a ClusterIP Service; inspect CNI and NetworkPolicy behavior; trace an HTTPS request through an Ingress; provision a PVC using a CSI driver. Verification checklist: identify the actual CNI and its policy capabilities, whether kube-proxy is enabled, the physical network underlay, ingress/Gateway controller, firewall placement, CSI driver and backing storage, and HA and failover domains. Do not infer these from Kubernetes alone.</p>
      <div className="atlas-panel"><p>Next: <Link href="/atlas/memory-systems">💾 Memory: from physical cells to processes →</Link></p></div>
    </div>
  );
}
