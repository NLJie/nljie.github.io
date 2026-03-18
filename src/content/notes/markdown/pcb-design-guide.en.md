# PCB Design Practical Guide

## PCB Design Flow

```
1. Schematic → 2. Footprint → 3. Layout → 4. Routing → 5. Verification → 6. Manufacturing
     ↓              ↓           ↓            ↓             ↓
   Component      3D Model    Thermal      Signal       DRC Check
   Selection      Pad Design   EMC         Integrity    Gerber Output
```

![PCB Design Flow](/images/pcb-design.jpg)

## Layout Principles

### Zoning

```
┌─────────────────────────────────────┐
│  Analog Circuit    │  Digital Circuit│
│  (Sensitive)       │  (High Speed)   │
├────────────────────┼─────────────────┤
│                    │                 │
│  Power Input       │  Power Output   │
│  Filter Circuit    │  Driver Circuit │
│                    │                 │
├────────────────────┴─────────────────┤
│         Connector / Interface        │
└─────────────────────────────────────┘
```

### Layout Priority

1. **Mechanical parts** - Connectors, mounting holes, buttons
2. **Critical ICs** - MCU, power ICs, crystals
3. **Sensitive circuits** - Analog, RF, high-speed
4. **Heat sources** - Power devices, LDOs
5. **Common parts** - Resistors, capacitors, LEDs

## Routing Techniques

### Power Routing

```
❌ Wrong: Star topology
     VCC
      │
   ┌──┼──┐
   ↓  ↓  ↓
  IC1 IC2 IC3

✅ Correct: Power tree
  Input → LDO → Bulk Cap
                  │
          ┌───────┼───────┐
          ↓       ↓       ↓
        Small   Small   Small
        Cap     Cap     Cap
          │       │       │
         IC1     IC2     IC3
```

### Decoupling Capacitor Placement

```
Best (capacitor close to chip):
         VCC
          │
      ┌───┴───┐
      │  Chip  │
      └───┬───┘
          │
        ┌─┴─┐
        │0.1│
        │µF │
        └─┬─┘
          │
         GND

Worst (capacitor far from chip):
         VCC
          │
        ┌─┴─┐
        │10µ│
        │ F │
        └─┬─┘
          │
      ┌───┴───┐
      │  Chip  │
      └───────┘
```

### High-Speed Signal Routing

| Rule | Description |
|------|-------------|
| 3W Rule | Spacing ≥ 3× trace width, reduces crosstalk |
| 20H Rule | Power layer inset 20× dielectric thickness |
| Length matching | DDR, USB differential pairs need matching |
| Avoid right angles | Use 45° or arcs |
| Reference plane | High-speed signals need continuous reference |

![High Speed Routing](/images/pcb-design.jpg)

## Ground Design

### Single vs Multi-Point Grounding

```
Low frequency (<1MHz) - Single point:

    IC1    IC2    IC3
     │      │      │
     └──────┼──────┘
            │
           GND

High frequency (>10MHz) - Multi-point:

    IC1 ──┬── GND Plane
          │
    IC2 ──┤
          │
    IC3 ──┘
```

## Power Integrity

### Power Plane Splitting

```
4-Layer Stackup:

Top:     Signal + small power traces
Inner1:  Complete ground plane (priority)
Inner2:  Power plane (5V, 3.3V split)
Bottom:  Signal + power traces

Split Example:
┌─────────────────────────────┐
│  3.3V  │  5V  │     3.3V    │
│ Analog │ Dig  │    I/O      │
│ Power  │Power │             │
└─────────────────────────────┘
```

## EMC Design

### Reducing Radiation

```
High-speed signal routing:

✅ Correct:
    Signal ───────┬───────
               │
    GND ───────┴───────
    
    Continuous reference plane under signal

❌ Wrong:
    Signal ─────╱╲╱╲─────
              
    GND ───────────────
    
    Signal crossing split, broken return path
```

![EMC Design](/images/pcb-design.jpg)

## Summary

High-quality PCB design essentials:

1. **Reasonable layout** - Clear zones, good signal flow
2. **Power integrity** - Proper decoupling, low impedance
3. **Signal integrity** - Impedance matching, reference planes
4. **EMC consideration** - Reduce radiation, improve immunity
5. **Manufacturability** - Follow fab capabilities, easy assembly
