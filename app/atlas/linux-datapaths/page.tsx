import type { Metadata } from "next";
import Link from "next/link";
import AtlasTabs from "@/components/AtlasTabs";
import AtlasFlow from "@/components/AtlasFlow";

export const metadata: Metadata = {
  title: "🐧 Interfaces, Linux datapaths — Atlas",
  description:
    "B012: from ISP optical termination and campus topology to Linux routing, packet filtering, network namespaces, virtual NICs and infrastructure abstractions.",
};

export default function LinuxDatapaths() {
  return (
    <div className="atlas-wrap">
      <Link href="/atlas">← Atlas index</Link>
      <p className="atlas-eyebrow" style={{ marginTop: 20 }}>B012 · Annotated continuation of B011</p>
      <h1 className="atlas-hero">🐧 Interfaces, Linux datapaths</h1>
      <p className="atlas-lead">
        From ISP optical termination and campus network topology to Linux
        routing, packet filtering, network namespaces, virtual NICs and
        infrastructure abstractions. Each handwritten scan is embedded
        unchanged in the source edition; technical interpretations and
        corrections are separately labeled. This is a careful topic-level
        reading, not a certified word-for-word transcription.
      </p>
      <AtlasTabs tabs={[
        { label: "✍️ Original", content: <p>Four preserved handwritten pages (B012 pages 01–04) plus the annotated sections below: common interfaces and the end-to-end diagram, Linux implementation, electronic devices and virtual equivalents, seven physical-to-virtual mappings, and following one request from the wire into a workload.</p> },
        { label: "🧭 Editorial", content: <p>Identity layers, kept apart: MAC addresses identify interfaces within a link-layer domain (and may be virtualized); IP addresses are Layer-3 locators; VLAN tags partition Layer-2 broadcast domains; SSIDs identify wireless networks; routes determine forwarding next hops. Serial numbers are inventory identifiers, not packet forwarding addresses.</p> },
        { label: "✨ AI explanations", content: <p>Useful commands from the source, illustrative and privilege-dependent: ip -br link, ip -br addr, ip route show, ip rule show, bridge link, bridge vlan show, sudo nft list ruleset, ip netns list, ss -tulpn.</p> },
        { label: "✅ Verify", content: <p>ip route manipulates kernel routing tables; iptables/nft configure packet-filtering/NAT rules, they are not themselves routing tables. firewalld is a management layer over firewall backends. eth0/eth1 are interface names, not intrinsically WAN or LAN — current Linux often uses predictable names such as enp3s0. IDS may monitor mirrored traffic, IPS can be inline, HSM supplies cryptographic operations — they are not equivalent inline hops. A VIP alone does not perform load balancing; a PVC is a claim for storage, not the storage medium.</p> },
      ]} />

      <h2>🔌 01 · Common interfaces and the end-to-end network diagram</h2>
      <p>From the page: loopback; physical wired Ethernet; wireless interface; network bridge; virtual Ethernet; tunnel/VPN; device identity (MAC, serial); network identity (IP, VLAN, SSID, routing). The illustrated path: ISP backbone → ISP-side OLT → modem/ONT → edge router → firewall cluster → core switches → distribution switch → access switches → Wi-Fi APs / NICs / industrial gateway → IDS/IPS/HSM → ADC. Clarifications: an OLT is the provider-side termination in a passive optical network; an ONT/ONU is typically the customer-side fiber termination, often integrated with a home gateway. “Modem” is a generic label and does not describe every fiber termination accurately. A firewall cluster is one deployment choice, not a mandatory stage. ADC/load balancing is commonly deployed in front of selected applications, not universally after every endpoint.</p>

      <h2>🐧 02 · Linux implementation: routing, firewall, switching, endpoints</h2>
      <p>From the page: edge router → iptables/nftables and <code>ip route</code>; eth0/eth1 as WAN/LAN interfaces; firewall → Netfilter and iptables/firewalld/nftables; switches → Linux bridge and <code>ip link</code>; NIC/HBA → TUN/TAP and veth pairs; load balancers → HAProxy and NGINX. Bridges: a Linux bridge forwards Layer-2 frames among attached ports; <code>ip link</code> manages interface state, while bridge utilities manage forwarding details. A veth pair behaves like two connected virtual Ethernet ports, common between a container namespace and host bridge. TUN exposes Layer-3 packets; TAP exposes Layer-2 frames. VPN is a use case for TUN, not a synonym for it.</p>

      <h2>🔌 03 · Electronic devices, physical media and virtual equivalents</h2>
      <p>Physical devices: routers, switches, firewalls, access points, modems, NICs, load balancers, IDS/IPS, repeaters and encoders. Physical media: CAT Ethernet cable, fiber/DSL, RF spectrum, PCIe and transceivers. Virtual equivalents: VLANs, VPN tunnels, VXLAN, GRE, virtual NICs, VIPs, iSCSI and FCoE. Key distinction: a physical port is a hardware connector/interface; a virtual interface is a software-managed networking endpoint. A physical cable is a transmission medium, whereas a virtual link is a logical connectivity relationship over underlying physical media. A packet or frame is a protocol data unit, not a direct virtual replacement for an analog, electrical or optical signal. A physical network can host multiple logical networks using VLAN, VRF and overlay encapsulation. Multiplexing: a single Ethernet trunk can carry multiple VLANs; an IP underlay can carry multiple VXLAN VNIs; a physical NIC can expose multiple virtual functions using SR-IOV. None of these removes dependence on the physical bandwidth, optics, switches and failure domains beneath.</p>

      <h2>🔄 04 · Physical device → virtual resource: seven mappings</h2>
      <div className="atlas-grid">
        {[
          ["🖥️ Server → VM / compute instance / Kubernetes node", "A node may itself be a VM or bare-metal server; these are different abstraction levels."],
          ["🔌 NIC → vNIC, veth, tap, virtio-net, SR-IOV VF", "Interface names such as eth0/ens160 can name physical or virtual devices."],
          ["🧱 Switch → Linux bridge, Open vSwitch, virtual switch", "A bridge forwards L2 traffic; it is not the same as an IP route."],
          ["🔀 Router → virtual router, routing table, network namespace", "A route table is one component of routing, not a complete router."],
          ["🛡️ Firewall → security group, ACL, nftables policy", "Statefulness, enforcement point and provider behavior differ."],
          ["⚖️ Load balancer → VIP, service endpoint, proxy or cloud LB", "A VIP alone does not perform load balancing."],
          ["💾 Storage device → volume, LUN, PV/PVC", "A PVC is a claim for storage; it is not itself the storage medium."],
        ].map(([t, d]) => (
          <div key={t} className="atlas-card"><h3>{t}</h3><p>{d}</p></div>
        ))}
      </div>
      <p>Original second mapping: device → virtual resource, port → interface, cable → link, path → route, plug → attachment, signal → packet/frame, physical network → logical network. These are design analogies, not one-to-one replacements.</p>

      <h2>📦 05 · Follow one request from the wire into a workload</h2>
      <AtlasFlow steps={[
        { emoji: "🌐", title: "Provider ISP transport", text: "OLT/ONT where PON is used." },
        { emoji: "🔀", title: "Edge WAN interface", text: "Routing, NAT as needed." },
        { emoji: "🛡️", title: "Security", text: "Firewall policy, optional inline IPS." },
        { emoji: "🏢", title: "Campus fabric", text: "Core/distribution/access switches; VLAN trunks." },
        { emoji: "🖥️", title: "Compute host", text: "Physical NIC → bridge/OVS → veth/tap." },
        { emoji: "📦", title: "Application Pod/VM", text: "IP → service or proxy → application socket." },
      ]} />
      <p>What changes at each boundary? Ethernet frames may be re-encapsulated at each routed hop; Layer-3 destinations usually persist end-to-end unless translated by NAT or proxies; VLAN tags are local to participating Layer-2 segments; VXLAN encapsulates tenant frames over an IP underlay. A TCP connection ends at a proxy if the proxy terminates it and creates a separate upstream connection. Cross-link: read the Kubernetes/CNI chapter for enterprise network comparisons, and the earlier Linux/NIC chapters for the hardware-to-kernel path.</p>
      <div className="atlas-panel"><p>End of the new sections. Back to <Link href="/atlas">Atlas index</Link> or <Link href="/atlas/source-index">source index</Link>.</p></div>
    </div>
  );
}
