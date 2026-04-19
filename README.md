# MIDI MONITOR (Web Edition)

A high-performance, professional MIDI monitoring and visualization suite built for the web.

**Live Demo:** [https://craig-van-hise.github.io/midi-monitor-web/](https://craig-van-hise.github.io/midi-monitor-web/)

---

## 🚀 Core Features

*   **Real-time MIDI Logging:** A high-performance ledger displaying MIDI messages as they arrive, including Channel, Message Type, Data bytes, and precise Delta Time (Δ).
*   **Smart Filtering:** Tailor your monitor feed with independent toggles for all 16 MIDI Channels and specific Message Types (Note On/Off, CC, Pitch Bend, Aftertouch, Program Change, etc.).
*   **Continuous Data Graph:** Visualize continuous controller data in real-time. Automatically plots CC, Pitch Bend, and Aftertouch with a dynamic, color-coded legend for multiple streams.
*   **128-Key Visualizer:** A responsive, full-range piano roll that displays active notes with optimized spacing and real-time note readouts.
*   **Advanced Controls:** Take command of your data with Pause/Play functionality, a global data clear, and a configurable history buffer (up to 5,000 events).

## ⚙️ Settings & Customization

MIDI Monitor is designed for versatility, offering extensive customization options:

*   **Display Formats:** Toggle between descriptive **Note Names** (e.g., C4) and **Raw MIDI Numbers**.
*   **Numeric Modes:** Switch between standard **Decimal** and professional **Hexadecimal** (0x--) display modes for all data bytes.
*   **Middle C Designation:** Select your preferred standard for Middle C (C3/C4/C5) to match your hardware or DAW (Yamaha, Roland, or Cakewalk standards).
*   **CSV Export:** Generate and download a structured `.csv` log of your current session for offline analysis and archival.

## 🏗️ Technical Architecture

*   **Core:** Built with **React 19**, **TypeScript**, and **Vite** for a modern, type-safe development experience.
*   **Communication:** Leverages the native **Web MIDI API** for high-performance, low-latency browser-based MIDI communication.
*   **State Management:** High-performance direct DOM updates for the ledger and Canvas-based rendering for the continuous data graphs.
*   **Persistence:** User preferences (filters, display modes, etc.) are maintained locally.
*   **CI/CD:** Fully automated deployment to GitHub Pages via **GitHub Actions**.

## 📖 Usage Instructions

1.  Connect your MIDI controller to your computer.
2.  Open the [Live Demo](https://craig-van-hise.github.io/midi-monitor-web/).
3.  Select your device from the **MIDI Input Device** dropdown menu.
4.  Data will begin streaming into the ledger and graph automatically.
5.  Use the **Settings** gear icon to customize display modes or export your session data.

---

## 👨‍💻 Credits

**Created by Craig Van Hise**

*   **Website:** [virtualvirgin.net](https://www.virtualvirgin.net/)
*   **GitHub:** [github.com/craig-van-hise](https://github.com/craig-van-hise)

---
*SPDX-License-Identifier: Apache-2.0*
