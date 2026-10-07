# Linux-Filesystem Hierarchy Standard

## chapter 1 : / Root Directory Structure

- It Contains following directories, or symbolic links to directories,
- root filesystem should generally be small, since it contains very critical files and a small, infrequently modified filesystem has a better chance of not getting corrupted.

1. [`/bin:`](#bin)     Essential command binaries
2. [`/boot:`](#boot) Static files of the boot loader
3. [`/dev:`](#dev)     Device files
4. [`/etc:`](#etc)     Host-specific system configuration
5. [`/lib:`](#lib)     Essential shared libraries and kernel modules
6. [`/media:`](#media) Mount point for removable media
7. [`/mnt:`](#mnt)     Mount point for mounting a filesystem temporarily
8. [`/opt:`](#opt)     Add-on application software packages
9. [`/run:`](#run)     Data relevant to running processes
10. [`/sbin:`](#sbin) Essential system binaries
11. [`/srv:`](#srv)  Data for services provided by this system
12. [`/tmp:`](#tmp)     Temporary files
13. [`/usr:`](#usr)  Secondary hierarchy
14. [`/var:`](#var)     Variable data  

if the corresponding subsystem is installed, The following directories, or symbolic links to directories, must be in /

- home: User home directories (optional)
- lib<qual>: Alternate format essential shared libraries (optional)
- root: Home directory for the root user (optional)

## /bin

* /bin contains commands that may be used by both the system administrator and by users,
   but which are required when no other filesystems are mounted (e.g. in single user mode).
- It may also contain commands which are used indirectly by
    scripts.(Command binaries that are not essential enough to place into /bin must be placed in /usr/bin, instead.)
- There must be no subdirectories in /bin.

## /boot

**Static files of the boot loader**
- Contains Files used by the bootstrap loader,ex GRUB,LILO.
- Kernel images are often kept here instead of in the root directory.
- This directory contains everything required for the boot process except configuration files not needed at boot time and the map installer.
- /boot stores data that is used before the kernel begins executing user-mode programs.
- Configuration files for boot loaders that are not required at boot time must be placed in /etc.
- The operating system kernel must be located in either / or /boot.
- The /dev/MAKEDEV.local is a script written by the system administrator that creates local-only device files or links

## /dev

**Device files**

- the purpose of /dev directory is to locate special or device files.
- it is possible that devices in /dev will need to be manually created
- /dev must contain a command named MAKEDEV, which can create devices as needed.
- It may also contain a MAKEDEV.local for any local devices.
- The device files are created during installation, and later with the /dev/MAKEDEV script

- /dev/fd0: The first floppy drive.
- /dev/fb0: The first framebuffer device. A framebuffer is an abstraction layer between software and graphics hardware.
- /dev/hda: it is the master IDE drive on the primary IDE controller. /dev/hdb the slave drive on the primary controller.
  - /dev/hdc,and /dev/hdd are the master and slave devices on the secondary controller respectively.
  - each disk is divided into partitions
  - Partitions 1-4 are primary partitions and partitions 5 and above are logical partitions inside extended partitions.

- /dev/sda: The first SCSI drive on the first SCSI bus.
- /dev/ttyS0: The first serial port. Many times this it the port used to connect an external modem to your system.

## /etc

**Host-specific system configuration**

- The purpose/etc hierarchy is to  contain the configuration files.
- A "configuration file" is a local file used to control the operation of a program;
- /etc may contain executable scripts, such as the command scripts commonly called by init to start and shut down the system and start daemon processes.
- it must be static and cannot be an executable binary.(Executable binary" in this context refers to direct machine code or pseudocode not in a human-readable format, such as native ELF executables. )
- No binaries may be located under /etc.
- it contain the /opt dir: Configuration for /opt

##### The following files, or symbolic links to files, must be in /etc if the corresponding subsystem is installed

1. csh.login: Systemwide initialization file for C shell logins (optional)
2. exports:  NFS filesystem access control list (optional)
3. fstab:    Static information about filesystems (optional)
4. ftpusers: FTP daemon user access control list (optional)
5. gateways: File which lists gateways for routed (optional)
6. gettydefs: Speed and terminal settings used by getty (optional)
7. group:    User group file (optional)
8. host.conf Resolver configuration file (optional)
9. hosts:     Static information about host names (optional)
10. hosts.allow: Host access file for TCP wrappers (optional)
11. hosts.deny:  Host access file for TCP wrappers (optional)
12. hosts.equiv:  List of trusted hosts for rlogin, rsh, rcp (optional)
13. hosts.lpd:      List of trusted hosts for lpd (optional)
14. inetd.conf:  Configuration file for inetd (optional)
15. inittab:     Configuration file for init (optional)
16. issue:       Pre-login message and identification file (optional)
17. ld.so.conf:  List of extra directories to search for shared libraries (optional)
18. motd:         Post-login message of the day file (optional)
19. mtab:         Dynamic information about filesystems (optional)
20. mtools.conf: Configuration file for mtools (optional)
21. networks:     Static information about network names (optional)
22. passwd:         The password file (optional)
23. printcap:    The lpd printer capability database (optional)
24. profile         Systemwide initialization file for sh shell logins (optional)
25. protocols     IP protocol listing (optional)
26. resolv.conf Resolver configuration file (optional)
27. rpc RPC protocol listing (optional)
28. securetty TTY access control for root login (optional)
29. services Port names for network services (optional)
30. shells Pathnames of valid login shells (optional)
31. syslog.conf Configuration file for syslogd (optional)

- /etc/passwd: The user database,
- /etc/shells: Lists trusted shells.( The chsh command allows users to change their login shell only to shells listed in this file)
- /etc/shadow:  is an encrypted file the holds user passwords.
- /etc/fstab:  Lists the filesystems mounted automatically at startup by the mount -a command (in /etc/rc or equivalent startup file).
- /etc/group:  Similar to /etc/passwd, but describes groups instead of users.
- /etc/inittab: Configuration file for init.
- /etc/mtab:  List of currently mounted filesystems. Initially set up by the bootup scripts, and updated automatically by the mount command.

## /home

**User home directories (optional)**

- /home is a fairly standard concept, but it is clearly a site-specific filesystem.
- This section describes only a suggested placement for user home directories;
    nevertheless we recommend that all FHS-compliant distributions use this as the default location for user home directories.
- The setup will differ from host to host.
- User specific configuration files for applications are stored in the user's home directory in a file that starts with the '.' character (a "dot file").
- ach user's home directory is typically implemented as a subdirectory directly under /home,
    for example /home/smith, /home/torvalds, /home/operator, etc
- to find a user's home directory, use a library function such as getpwent, getpwent_r of fgetpwent rather than
 relying on /etc/passwd because user information may be stored remotely using systems such as NIS.

## /lib

 **Essential shared libraries and kernel modules**
- The /lib directory contains those shared library images needed to boot the system and run the commands in the root filesystem, ie. by binaries in /bin and /sbin.
 (Shared libraries that are only necessary for binaries in /usr (such as any X Window binaries) must not be in /lib. )
- it contains /modules dir: Loadable kernel modules (optional)

## /lib<qual>

**Alternate format essential shared libraries (optional)**
- This is commonly used for 64-bit or 32-bit support on systems which support multiple binary formats, but require libraries of the same name.

## /media

**Mount point for removable media**

- it contains subdirectories which are used as mount points for removable media such as floppy disks, cdroms and zip disks.
- a number of other different places used to mount removable media such as /cdrom, /mnt or /mnt/cdrom.
- Although the use of subdirectories in /mnt in root / as a mount point has recently been common,
- The following directories, or symbolic links to directories, must be in /media,if the corresponding subsystem is installed:
  - floppy Floppy drive (optional)
  - cdrom CD-ROM drive (optional)
  - cdrecorder CD writer (optional)
  - zip Zip drive (optional)
- mount directories can be created by appending a digit to the name of those available above starting with '0', but the unqualified name must also exist

## /mnt

**Mount point for a temporarily mounted filesystem**
- directory is provided so that the system administrator may temporarily mount a filesystem as needed.
- The content of this directory is a local issue and should not affect the manner in which any program is run.
- a suitable temporary directory not in use by the system must be used instead.

## /opt

**Add-on application software packages**

- /opt is reserved for the installation of add-on application software packages.
- A package to be installed in /opt must locate its static files in a separate /opt/<package> or /opt/<provider> directory tree,
- where <package> is a name that describes the software package and <provider> is the provider's LANANA registered name.
 <package> Static package objects
 <provider> LANANA registered provider name
**The directories**
   /opt/bin,
   /opt/doc,
   /opt/include,
   /opt/info,
   /opt/lib, and
   /opt/man are reserved for local system administrator use.
- Package files that are variable (change in normal operation) must be installed in /var/opt.
- Host-specific configuration files must be installed in /etc/opt

## /root

**Home directory for the root user (optional)**

- The root account's home directory may be determined by developer or local preference, but this is the recommended default location.
- f the home directory of the root account is not stored on the root partition
    it will be necessary to make certain it will default to / if it cannot be located.

## /run

**Run-time variable data**

- This directory contains system information data describing the system since it was booted.
- Files under this directory must be cleared (removed or truncated as appropriate) at the beginning of the boot process.
- The purposes of this directory were once served by /var/run.
- Process identifier (PID) files, which were originally placed in /etc, must be placed in /run.
- The naming convention for PID files is <program-name>.pid.
**For example, the crond PID file is named /run/crond.pid**

## /sbin

**System binaries**

- Utilities used for system administration (and other root-only commands) are stored in /sbin, /usr/sbin,and /usr/local/sbin.
- /sbin contains binaries essential for booting, restoring, recovering, and/or repairing the system in addition to the binaries in /bin.(Originally, /sbin binaries were kept in /etc. )
- Locally-installed system administration programs should be placed into /usr/local/sbin
- There must be no subdirectories in /sbin.
- it contains shutdown Command to bring the system down.
***The following files, or symbolic links to files, must be in /sbin if the corresponding subsystem is installed:***

1. fastboot     
Reboot the system without checking the disks (optional)
2. fasthalt     
Stop the system without checking the disks (optional)
3. fdisk     
Partition table manipulator (optional)
4. fsck          
File system check and repair utility (optional)
5. fsck.*     
File system check and repair utility for a specific filesystem (optional)
6. getty     
The getty program (optional)
7. halt         
Command to stop the system (optional)
8. ifconfig     
Configure a network interface (optional)
9. init         
Initial process (optional)
10. mkfs     
Command to build a filesystem (optional)
11. mkfs.*    
 Command to build a specific filesystem (optional)
12. mkswap     
Command to set up a swap area (optional)
13. reboot     
Command to reboot the system (optional)
14. route     I
P routing table utility (optional)
15. swapon     
Enable paging and swapping (optional)
16. swapoff     
Disable paging and swapping (optional)
17. update     
Daemon to periodically flush filesystem buffers (optional)

## /srv

**Data for services provided by this system**
- /srv contains site-specific data which is served by this system.

## /tmp

**Temporary files**
- The /tmp directory must be made available for programs that require temporary files.
- data stored in /tmp may be deleted in a site-specific manner, it is recommended that files and directories located in /tmp be deleted whenever the system is booted.

# chapter 2: The /usr Directory Structure

- /usr is the second major section of the filesystem. /usr is shareable, read-only data.
- The /usr filesystem is often large, since all programs are installed there.
- All files in /usr usually come from a Linux distribution;
- locally installed programs and other stuff goes below /usr/local.
- means that /usr should be shareable between various FHS-compliant hosts and must not be written to.
***The following directories, or symbolic links to directories, are required in /usr***

1. bin: Most user commands
2. lib: Libraries
3. local: Local hierarchy (empty after main installation)
4. sbin: Non-vital system binaries
5. share: Architecture-independent data

***Specific Options***

1. games: Games and educational binaries (optional)
2. include: Header files included by C programs
3. libexec: Binaries run by other programs (optional)
4. lib<qual>: Alternate Format Libraries (optional)
5. src: Source code (optional)

1. /bin: **This is the primary directory of executable commands on the system.**

- There must be no subdirectories in /usr/bin.
- The following files, or symbolic links to files, must be in /usr/bin, perl,python,tclsh,wish,expect.

2. /usr/include: **Directory for standard include files.**

- this is where all of the system's general-use include files for the C programming language should be placed.
- it contains bsd dir

3. /usr/lib: **Libraries for programming and packages**

- /usr/lib includes object files and libraries.

4. /usr/libexec:**Binaries run by other programs (optional)**

- /usr/libexec includes internal binaries that are not intended to be executed directly by users or shell scripts.

5. /usr/local: **Local hierarchy**

- The /usr/local hierarchy is for use by the system administrator when installing software locally.
- The place for locally installed software and other files.

6. /usr/share: **Architecture-independent data**

- The /usr/share hierarchy is for all read-only architecture independent data files.
- This hierarchy is intended to be shareable among all architecture platforms of a given OS;
  ***The following directories, or symbolic links to directories, must be in /usr/share***

  1. man Online manuals
  2. misc Miscellaneous architecture-independent data

# chapter-3 The /var Directory Structure

* /var contains data that is changed when the system is running normally
- it is specific for each system, i.e., not shared over the network with other computers.

1. /var/log:
    - Log files from various programs(such as login,syslog)
    - login= /var/log/wtmp -> which logs all logins and logouts into the system and
    - syslog= /var/log/messages ->  where all kernel and system program message are usually stored.
    - Files in /var/log can often grow indefinitely, and may require cleaning at regular intervals.
2. var/mail: This is the FHS approved location for user mailbox files.
    - these files may still be held in /var/spool/mail.
3. /var/run: Files that contain information about the system that is valid until the system is next booted.
    - For example, /var/run/utmp contains information about people currently logged in.
4. /var/lock: Lock files.
    - Many programs follow a convention to create a lock file in /var/lock to indicate that they are using a particular device or file.
    - Other programs will notice the lock file and won't attempt to use the device or file.

# chapter-4 The /proc Directory Structure

- The /proc filesystem contains a illusionary filesystem.
- It does not exist on a disk. Instead, the kernel creates it in memory.
- It is used to provide information about the system
