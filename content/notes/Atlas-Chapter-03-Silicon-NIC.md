# Atlas Chapter 03 — Silicon to a Working Network Interface

Curriculum chapter 03. Theme: hardware and Linux. Source pages in the Atlas: pages 07 to 10, provisionally assigned.

## The original note, in brief

The notes draw a chain: NIC, PCI, drivers, kernel stack, net-device, TCP/IP, and mention Intel, Broadcom and NVIDIA. The text here is a topic-level extract, not a verbatim transcription.

## Understand each relationship

- NIC hardware: connects a host to a network medium. A PCIe NIC is one common implementation.
- Device driver: allows the operating system to control the device and exchange data.
- Network stack: processes protocols and provides networking capabilities to applications.

## Enhanced learning flow

Silicon and NIC, then PCIe and device enumeration, then driver, then kernel network stack, then TCP/IP, then application. Each step is a boundary: hardware to bus, bus to driver, driver to kernel, kernel to protocol, protocol to application.

## From electric signals to functional silicon

The wider Atlas material behind this chapter covers:

- Electric signals to functional silicon, processing engines, instruction sets and configurable logic.
- Memory hierarchy, storage and motherboard controllers.
- From embedded devices to NICs, switches and cloud systems.
- Source-by-source semiconductor notes: foundries, wafers, chip vendors, tenders and global supply chains.

## Linux implementation map

Physical systems in this chapter connect to Linux subsystems, with version and configuration caveats:

- Serial and TTY: drivers and tty.
- Network device layer: net core device handling, socket layer, IPv4 and IPv6 stacks.
- Drivers: network drivers, media, GNSS, industrial I/O, accelerators.
- Packet processing: netfilter, Netlink, TUN and TAP, VXLAN and GRE, 6LoWPAN, WWAN, eBPF.
- Driver examples that recur in the recovered notes: ixgbe, ice, bnxt_en, mlx5 and ena, alongside hyperscalers, OEMs, telcos, research labs and government buyers.

These paths are illustrations. Exact paths and feature support vary by kernel version and configuration.

## What to watch out for

- Do not equate the map with the territory. A kernel subsystem is not a government department, and a NIC is not a telegraph wire, even when the analogy helps learning.
- Supply chains matter as much as silicon. Who makes the chip, who writes the driver, who operates the network and who buys the capacity are different questions.
- Performance is a system property: DMA, firmware, driver, stack, routing and application all interact.

## Cross-links

- Era timeline: network family trees and Linux implementation, October 2, 2025.
- Engineering notes: SSH, TCP port 22, and kernel-level networking.
- Chapter 04: how interfaces evolved on top of this hardware.
