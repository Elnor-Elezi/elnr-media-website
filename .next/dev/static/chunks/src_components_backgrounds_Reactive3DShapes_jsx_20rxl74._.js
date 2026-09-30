(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/backgrounds/Reactive3DShapes.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Reactive3DShapes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-b389eeca.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$shapes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/shapes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$MeshDistortMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/MeshDistortMaterial.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Float$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Float.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function LiquidSphere() {
    _s();
    const meshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const materialRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    // Follow mouse gently but responsively
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "LiquidSphere.useFrame": (state)=>{
            const time = state.clock.getElapsedTime();
            // Smoothly interpolate the object's rotation towards the mouse position
            const targetX = state.pointer.x * Math.PI / 2;
            const targetY = state.pointer.y * Math.PI / 2;
            meshRef.current.rotation.x += 0.05 * (targetY - meshRef.current.rotation.x);
            meshRef.current.rotation.y += 0.05 * (targetX - meshRef.current.rotation.y);
            // Pulsate distort
            if (materialRef.current) {
                materialRef.current.distort = 0.3 + Math.sin(time) * 0.15;
            }
        }
    }["LiquidSphere.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Float$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Float"], {
        speed: 2,
        rotationIntensity: 1.5,
        floatIntensity: 2,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$shapes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sphere"], {
            ref: meshRef,
            args: [
                1.5,
                32,
                32
            ],
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$MeshDistortMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshDistortMaterial"], {
                ref: materialRef,
                color: "#14b8a6",
                metalness: 0.8,
                roughness: 0.2,
                distort: 0.4,
                speed: 2
            }, void 0, false, {
                fileName: "[project]/src/components/backgrounds/Reactive3DShapes.jsx",
                lineNumber: 30,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/backgrounds/Reactive3DShapes.jsx",
            lineNumber: 29,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/backgrounds/Reactive3DShapes.jsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_s(LiquidSphere, "Vhup5/xdTgTwfmv7+VZYkowmGGs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c = LiquidSphere;
function FloatingParticles({ count = 30 }) {
    _s1();
    const meshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const dummy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FloatingParticles.useMemo[dummy]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Object3D"]()
    }["FloatingParticles.useMemo[dummy]"], []);
    const particles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FloatingParticles.useMemo[particles]": ()=>{
            const temp = [];
            for(let i = 0; i < count; i++){
                const t = Math.random() * 100;
                const factor = 20 + Math.random() * 100;
                const speed = 0.01 + Math.random() / 200;
                const xFactor = -10 + Math.random() * 20;
                const yFactor = -10 + Math.random() * 20;
                const zFactor = -10 + Math.random() * 20;
                temp.push({
                    t,
                    factor,
                    speed,
                    xFactor,
                    yFactor,
                    zFactor,
                    mx: 0,
                    my: 0
                });
            }
            return temp;
        }
    }["FloatingParticles.useMemo[particles]"], [
        count
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "FloatingParticles.useFrame": (state)=>{
            particles.forEach({
                "FloatingParticles.useFrame": (particle, i)=>{
                    let { t, factor, speed, xFactor, yFactor, zFactor } = particle;
                    t = particle.t += speed / 2;
                    const a = Math.cos(t) + Math.sin(t * 1) / 10;
                    const b = Math.sin(t) + Math.cos(t * 2) / 10;
                    const s = Math.cos(t);
                    // Update mouse positions smoothly
                    particle.mx += (state.pointer.x * 15 - particle.mx) * 0.05;
                    particle.my += (state.pointer.y * 15 - particle.my) * 0.05;
                    dummy.position.set(particle.mx / 10 + a + xFactor + Math.cos(t / 10 * factor) + Math.sin(t * 1) * factor / 10, particle.my / 10 + b + yFactor + Math.sin(t / 10 * factor) + Math.cos(t * 2) * factor / 10, particle.my / 10 + b + zFactor + Math.cos(t / 10 * factor) + Math.sin(t * 3) * factor / 10);
                    const scale = (s + 2) / 15;
                    dummy.scale.set(scale, scale, scale);
                    dummy.rotation.set(s * 5, s * 5, s * 5);
                    dummy.updateMatrix();
                    meshRef.current.setMatrixAt(i, dummy.matrix);
                }
            }["FloatingParticles.useFrame"]);
            meshRef.current.instanceMatrix.needsUpdate = true;
        }
    }["FloatingParticles.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("instancedMesh", {
        ref: meshRef,
        args: [
            null,
            null,
            count
        ],
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("icosahedronGeometry", {
                args: [
                    0.2,
                    0
                ]
            }, void 0, false, {
                fileName: "[project]/src/components/backgrounds/Reactive3DShapes.jsx",
                lineNumber: 92,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                color: "#f97316",
                metalness: 0.5,
                roughness: 0.2,
                opacity: 0.6,
                transparent: true
            }, void 0, false, {
                fileName: "[project]/src/components/backgrounds/Reactive3DShapes.jsx",
                lineNumber: 93,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/backgrounds/Reactive3DShapes.jsx",
        lineNumber: 91,
        columnNumber: 5
    }, this);
}
_s1(FloatingParticles, "dtaPmNTc+gTFG1X3AdUpUMK9aes=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c1 = FloatingParticles;
function Reactive3DShapes() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full absolute inset-0 z-0 pointer-events-auto touch-none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
            camera: {
                position: [
                    0,
                    0,
                    5
                ],
                fov: 45
            },
            dpr: [
                1,
                1.5
            ],
            performance: {
                min: 0.5
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ambientLight", {
                    intensity: 0.8
                }, void 0, false, {
                    fileName: "[project]/src/components/backgrounds/Reactive3DShapes.jsx",
                    lineNumber: 104,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("directionalLight", {
                    position: [
                        10,
                        10,
                        5
                    ],
                    intensity: 2.5,
                    color: "#ffffff"
                }, void 0, false, {
                    fileName: "[project]/src/components/backgrounds/Reactive3DShapes.jsx",
                    lineNumber: 105,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("directionalLight", {
                    position: [
                        -10,
                        -10,
                        -5
                    ],
                    intensity: 1.5,
                    color: "#14b8a6"
                }, void 0, false, {
                    fileName: "[project]/src/components/backgrounds/Reactive3DShapes.jsx",
                    lineNumber: 106,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                    position: [
                        0,
                        -5,
                        5
                    ],
                    intensity: 2,
                    color: "#050505"
                }, void 0, false, {
                    fileName: "[project]/src/components/backgrounds/Reactive3DShapes.jsx",
                    lineNumber: 107,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LiquidSphere, {}, void 0, false, {
                    fileName: "[project]/src/components/backgrounds/Reactive3DShapes.jsx",
                    lineNumber: 109,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FloatingParticles, {
                    count: 30
                }, void 0, false, {
                    fileName: "[project]/src/components/backgrounds/Reactive3DShapes.jsx",
                    lineNumber: 110,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/backgrounds/Reactive3DShapes.jsx",
            lineNumber: 103,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/backgrounds/Reactive3DShapes.jsx",
        lineNumber: 100,
        columnNumber: 5
    }, this);
}
_c2 = Reactive3DShapes;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "LiquidSphere");
__turbopack_context__.k.register(_c1, "FloatingParticles");
__turbopack_context__.k.register(_c2, "Reactive3DShapes");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/backgrounds/Reactive3DShapes.jsx [app-client] (ecmascript, next/dynamic entry)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/backgrounds/Reactive3DShapes.jsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_components_backgrounds_Reactive3DShapes_jsx_20rxl74._.js.map