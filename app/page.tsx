'use client';

import { useState } from 'react';

type AnimationState = 'idle' | 'anticipation' | 'opening' | 'revealing' | 'claimed';

interface LootBoxProps {
  title: string;
  description: string;
  onOpen: () => void;
  state: AnimationState;
  reward?: string;
}

// Example 1: Classic Spinning Loot Box
function SpinningLootBox({ title, description, onOpen, state, reward }: LootBoxProps) {
  return (
    <div className="bg-gradient-to-br from-purple-900 to-purple-700 p-6 rounded-xl shadow-2xl">
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-purple-200 text-sm mb-4">{description}</p>

      <div className="flex flex-col items-center gap-4">
        <div className={`relative w-32 h-32 ${state === 'opening' ? 'animate-spin' : ''} ${state === 'anticipation' ? 'animate-pulse' : ''}`}>
          <div className={`w-full h-full bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg shadow-lg flex items-center justify-center text-4xl transform transition-all duration-300 ${state === 'idle' ? 'hover:scale-110 hover:rotate-6' : ''} ${state === 'revealing' ? 'scale-150 opacity-0' : ''} ${state === 'claimed' ? 'scale-50 opacity-30' : ''}`}>
            {state === 'claimed' ? '✓' : '🎁'}
          </div>
          {state === 'revealing' && (
            <div className="absolute inset-0 flex items-center justify-center animate-bounce">
              <div className="text-6xl">✨</div>
            </div>
          )}
        </div>

        {state === 'revealing' && reward && (
          <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg animate-bounce">
            <p className="text-yellow-300 font-bold text-lg">{reward}</p>
          </div>
        )}

        <button
          onClick={onOpen}
          disabled={state !== 'idle' && state !== 'claimed'}
          className={`px-6 py-2 rounded-full font-semibold transition-all ${
            state === 'idle' ? 'bg-yellow-400 hover:bg-yellow-300 text-purple-900 hover:scale-105' :
            state === 'claimed' ? 'bg-gray-500 text-gray-300 cursor-not-allowed' :
            'bg-purple-600 text-purple-300 cursor-not-allowed'
          }`}
        >
          {state === 'idle' ? 'Open Box' : state === 'claimed' ? 'Claimed' : 'Opening...'}
        </button>
      </div>
    </div>
  );
}

// Example 2: Chest Opening Animation
function ChestLootBox({ title, description, onOpen, state, reward }: LootBoxProps) {
  return (
    <div className="bg-gradient-to-br from-amber-900 to-amber-700 p-6 rounded-xl shadow-2xl">
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-amber-200 text-sm mb-4">{description}</p>

      <div className="flex flex-col items-center gap-4">
        <div className="relative w-32 h-32">
          {/* Chest Lid */}
          <div className={`absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-amber-600 to-amber-700 rounded-t-lg border-4 border-yellow-600 transform-origin-bottom transition-transform duration-700 ${state === 'opening' || state === 'revealing' ? '-rotate-90 -translate-y-8' : ''} ${state === 'anticipation' ? 'animate-pulse' : ''}`}>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-yellow-400 rounded-full"></div>
          </div>

          {/* Chest Base */}
          <div className={`absolute bottom-0 left-0 w-full h-20 bg-gradient-to-b from-amber-700 to-amber-800 rounded-b-lg border-4 border-yellow-600 border-t-0 ${state === 'idle' ? 'hover:shadow-yellow-400/50 hover:shadow-lg' : ''}`}>
          </div>

          {/* Light Beam */}
          {(state === 'opening' || state === 'revealing') && (
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-24 h-32 bg-gradient-to-t from-yellow-300/80 to-transparent animate-pulse"></div>
          )}

          {/* Particles */}
          {state === 'revealing' && (
            <>
              <div className="absolute top-0 left-0 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
              <div className="absolute top-0 right-0 w-2 h-2 bg-yellow-400 rounded-full animate-ping animation-delay-100"></div>
              <div className="absolute top-10 left-1/2 w-3 h-3 bg-yellow-300 rounded-full animate-bounce"></div>
            </>
          )}
        </div>

        {state === 'revealing' && reward && (
          <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg animate-fade-in">
            <p className="text-yellow-300 font-bold text-lg">{reward}</p>
          </div>
        )}

        <button
          onClick={onOpen}
          disabled={state !== 'idle' && state !== 'claimed'}
          className={`px-6 py-2 rounded-full font-semibold transition-all ${
            state === 'idle' ? 'bg-yellow-500 hover:bg-yellow-400 text-amber-900 hover:scale-105' :
            state === 'claimed' ? 'bg-gray-500 text-gray-300 cursor-not-allowed' :
            'bg-amber-600 text-amber-300 cursor-not-allowed'
          }`}
        >
          {state === 'idle' ? 'Open Chest' : state === 'claimed' ? 'Claimed' : 'Opening...'}
        </button>
      </div>
    </div>
  );
}

// Example 3: Card Flip Reveal
function CardFlipLootBox({ title, description, onOpen, state, reward }: LootBoxProps) {
  return (
    <div className="bg-gradient-to-br from-blue-900 to-blue-700 p-6 rounded-xl shadow-2xl">
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-blue-200 text-sm mb-4">{description}</p>

      <div className="flex flex-col items-center gap-4">
        <div className="relative w-32 h-48 perspective-1000">
          <div className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${state === 'opening' || state === 'revealing' || state === 'claimed' ? 'rotate-y-180' : ''} ${state === 'anticipation' ? 'animate-pulse' : ''}`}>
            {/* Card Back */}
            <div className={`absolute w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg backface-hidden border-4 border-blue-300 flex items-center justify-center ${state === 'idle' ? 'hover:shadow-blue-400/50 hover:shadow-xl hover:scale-105' : ''} transition-all`}>
              <div className="text-6xl">🎴</div>
            </div>

            {/* Card Front */}
            <div className="absolute w-full h-full bg-gradient-to-br from-yellow-300 to-orange-400 rounded-lg backface-hidden rotate-y-180 border-4 border-yellow-200 flex items-center justify-center">
              <div className="text-6xl">{reward ? '🏆' : '✨'}</div>
            </div>
          </div>

          {state === 'revealing' && (
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <div className="text-4xl">✨</div>
            </div>
          )}
        </div>

        {state === 'revealing' && reward && (
          <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg animate-bounce">
            <p className="text-yellow-300 font-bold text-lg">{reward}</p>
          </div>
        )}

        <button
          onClick={onOpen}
          disabled={state !== 'idle' && state !== 'claimed'}
          className={`px-6 py-2 rounded-full font-semibold transition-all ${
            state === 'idle' ? 'bg-blue-400 hover:bg-blue-300 text-blue-900 hover:scale-105' :
            state === 'claimed' ? 'bg-gray-500 text-gray-300 cursor-not-allowed' :
            'bg-blue-600 text-blue-300 cursor-not-allowed'
          }`}
        >
          {state === 'idle' ? 'Flip Card' : state === 'claimed' ? 'Claimed' : 'Flipping...'}
        </button>
      </div>
    </div>
  );
}

// Example 4: Slot Machine Style
function SlotMachineLootBox({ title, description, onOpen, state, reward }: LootBoxProps) {
  const symbols = ['🍒', '💎', '⭐', '🎰', '💰'];

  return (
    <div className="bg-gradient-to-br from-red-900 to-red-700 p-6 rounded-xl shadow-2xl">
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-red-200 text-sm mb-4">{description}</p>

      <div className="flex flex-col items-center gap-4">
        <div className="bg-gradient-to-b from-yellow-600 to-yellow-700 p-4 rounded-lg border-4 border-yellow-500">
          <div className="flex gap-2 bg-black p-3 rounded">
            {[0, 1, 2].map((i) => (
              <div key={i} className={`w-16 h-20 bg-white rounded flex items-center justify-center text-4xl overflow-hidden ${state === 'opening' ? 'animate-slot-spin' : ''}`}>
                {state === 'revealing' || state === 'claimed' ? '💎' : symbols[i]}
              </div>
            ))}
          </div>
        </div>

        {state === 'revealing' && reward && (
          <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg animate-pulse">
            <p className="text-yellow-300 font-bold text-lg">{reward}</p>
          </div>
        )}

        <button
          onClick={onOpen}
          disabled={state !== 'idle' && state !== 'claimed'}
          className={`px-6 py-2 rounded-full font-semibold transition-all ${
            state === 'idle' ? 'bg-yellow-500 hover:bg-yellow-400 text-red-900 hover:scale-105' :
            state === 'claimed' ? 'bg-gray-500 text-gray-300 cursor-not-allowed' :
            'bg-red-600 text-red-300 cursor-not-allowed'
          }`}
        >
          {state === 'idle' ? 'Pull Lever' : state === 'claimed' ? 'Claimed' : 'Spinning...'}
        </button>
      </div>
    </div>
  );
}

// Example 5: Particle Burst Reveal
function ParticleBurstLootBox({ title, description, onOpen, state, reward }: LootBoxProps) {
  return (
    <div className="bg-gradient-to-br from-green-900 to-green-700 p-6 rounded-xl shadow-2xl">
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-green-200 text-sm mb-4">{description}</p>

      <div className="flex flex-col items-center gap-4">
        <div className="relative w-32 h-32">
          <div className={`w-full h-full bg-gradient-to-br from-green-400 to-emerald-500 rounded-full shadow-lg flex items-center justify-center text-5xl transform transition-all duration-500 ${state === 'idle' ? 'hover:scale-110' : ''} ${state === 'opening' ? 'scale-110 animate-pulse' : ''} ${state === 'revealing' ? 'scale-0' : ''}`}>
            {state === 'claimed' ? '✓' : '🌟'}
          </div>

          {state === 'revealing' && (
            <>
              {/* Particle effects */}
              <div className="absolute top-0 left-0 w-4 h-4 bg-yellow-400 rounded-full animate-particle-1"></div>
              <div className="absolute top-0 right-0 w-4 h-4 bg-green-400 rounded-full animate-particle-2"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 bg-blue-400 rounded-full animate-particle-3"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 bg-pink-400 rounded-full animate-particle-4"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl animate-scale-in">
                💎
              </div>
            </>
          )}
        </div>

        {state === 'revealing' && reward && (
          <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg animate-fade-in">
            <p className="text-yellow-300 font-bold text-lg">{reward}</p>
          </div>
        )}

        <button
          onClick={onOpen}
          disabled={state !== 'idle' && state !== 'claimed'}
          className={`px-6 py-2 rounded-full font-semibold transition-all ${
            state === 'idle' ? 'bg-green-400 hover:bg-green-300 text-green-900 hover:scale-105' :
            state === 'claimed' ? 'bg-gray-500 text-gray-300 cursor-not-allowed' :
            'bg-green-600 text-green-300 cursor-not-allowed'
          }`}
        >
          {state === 'idle' ? 'Burst Open' : state === 'claimed' ? 'Claimed' : 'Bursting...'}
        </button>
      </div>
    </div>
  );
}

// Example 6: Multi-Stage Unlock
function MultiStageLootBox({ title, description, onOpen, state, reward }: LootBoxProps) {
  const [stage, setStage] = useState(0);

  return (
    <div className="bg-gradient-to-br from-indigo-900 to-indigo-700 p-6 rounded-xl shadow-2xl">
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-indigo-200 text-sm mb-4">{description}</p>

      <div className="flex flex-col items-center gap-4">
        <div className="relative w-32 h-32">
          <div className={`w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg shadow-lg flex items-center justify-center text-5xl transition-all duration-300 ${state === 'idle' ? 'hover:scale-105' : ''}`}>
            {state === 'claimed' ? '✓' : '🔒'}
          </div>

          {/* Lock layers */}
          {state !== 'claimed' && (
            <>
              <div className={`absolute top-0 left-0 w-full h-full border-4 border-yellow-400 rounded-lg transition-all duration-500 ${state === 'opening' && stage >= 1 ? 'scale-125 opacity-0' : ''}`}></div>
              <div className={`absolute top-0 left-0 w-full h-full border-4 border-green-400 rounded-lg scale-110 transition-all duration-500 ${state === 'opening' && stage >= 2 ? 'scale-150 opacity-0' : ''}`}></div>
              <div className={`absolute top-0 left-0 w-full h-full border-4 border-blue-400 rounded-lg scale-125 transition-all duration-500 ${state === 'opening' && stage >= 3 ? 'scale-175 opacity-0' : ''}`}></div>
            </>
          )}

          {state === 'revealing' && (
            <div className="absolute inset-0 flex items-center justify-center text-6xl animate-bounce">
              🎁
            </div>
          )}
        </div>

        {state === 'opening' && (
          <div className="text-white text-sm">Stage {stage}/3</div>
        )}

        {state === 'revealing' && reward && (
          <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg animate-bounce">
            <p className="text-yellow-300 font-bold text-lg">{reward}</p>
          </div>
        )}

        <button
          onClick={() => {
            setStage(0);
            onOpen();
          }}
          disabled={state !== 'idle' && state !== 'claimed'}
          className={`px-6 py-2 rounded-full font-semibold transition-all ${
            state === 'idle' ? 'bg-indigo-400 hover:bg-indigo-300 text-indigo-900 hover:scale-105' :
            state === 'claimed' ? 'bg-gray-500 text-gray-300 cursor-not-allowed' :
            'bg-indigo-600 text-indigo-300 cursor-not-allowed'
          }`}
        >
          {state === 'idle' ? 'Unlock' : state === 'claimed' ? 'Claimed' : 'Unlocking...'}
        </button>
      </div>
    </div>
  );
}

// Example 7: Shake and Open
function ShakeLootBox({ title, description, onOpen, state, reward }: LootBoxProps) {
  return (
    <div className="bg-gradient-to-br from-pink-900 to-pink-700 p-6 rounded-xl shadow-2xl">
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-pink-200 text-sm mb-4">{description}</p>

      <div className="flex flex-col items-center gap-4">
        <div className="relative w-32 h-32">
          <div className={`w-full h-full bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl shadow-lg flex items-center justify-center text-5xl transform transition-all duration-300 ${state === 'idle' ? 'hover:rotate-12' : ''} ${state === 'opening' ? 'animate-shake' : ''} ${state === 'revealing' ? 'scale-150 rotate-180 opacity-0' : ''}`}>
            {state === 'claimed' ? '✓' : '🎀'}
          </div>

          {state === 'revealing' && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl animate-bounce">🎉</div>
            </div>
          )}
        </div>

        {state === 'revealing' && reward && (
          <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg animate-bounce">
            <p className="text-yellow-300 font-bold text-lg">{reward}</p>
          </div>
        )}

        <button
          onClick={onOpen}
          disabled={state !== 'idle' && state !== 'claimed'}
          className={`px-6 py-2 rounded-full font-semibold transition-all ${
            state === 'idle' ? 'bg-pink-400 hover:bg-pink-300 text-pink-900 hover:scale-105' :
            state === 'claimed' ? 'bg-gray-500 text-gray-300 cursor-not-allowed' :
            'bg-pink-600 text-pink-300 cursor-not-allowed'
          }`}
        >
          {state === 'idle' ? 'Shake & Open' : state === 'claimed' ? 'Claimed' : 'Shaking...'}
        </button>
      </div>
    </div>
  );
}

// Example 8: Glow Pulse Anticipation
function GlowPulseLootBox({ title, description, onOpen, state, reward }: LootBoxProps) {
  return (
    <div className="bg-gradient-to-br from-cyan-900 to-cyan-700 p-6 rounded-xl shadow-2xl">
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-cyan-200 text-sm mb-4">{description}</p>

      <div className="flex flex-col items-center gap-4">
        <div className="relative w-32 h-32">
          <div className={`w-full h-full bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full shadow-lg flex items-center justify-center text-5xl transform transition-all duration-500 ${state === 'idle' ? 'hover:shadow-cyan-400/70 hover:shadow-2xl' : ''} ${state === 'opening' ? 'animate-ping' : ''} ${state === 'revealing' ? 'scale-0' : ''} ${state === 'claimed' ? 'opacity-30' : ''}`}>
            ⚡
          </div>

          {state === 'opening' && (
            <div className="absolute inset-0 rounded-full bg-cyan-400/30 animate-ping"></div>
          )}

          {state === 'revealing' && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-7xl animate-scale-in">💫</div>
            </div>
          )}
        </div>

        {state === 'revealing' && reward && (
          <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg animate-pulse">
            <p className="text-yellow-300 font-bold text-lg">{reward}</p>
          </div>
        )}

        <button
          onClick={onOpen}
          disabled={state !== 'idle' && state !== 'claimed'}
          className={`px-6 py-2 rounded-full font-semibold transition-all ${
            state === 'idle' ? 'bg-cyan-400 hover:bg-cyan-300 text-cyan-900 hover:scale-105' :
            state === 'claimed' ? 'bg-gray-500 text-gray-300 cursor-not-allowed' :
            'bg-cyan-600 text-cyan-300 cursor-not-allowed'
          }`}
        >
          {state === 'idle' ? 'Activate' : state === 'claimed' ? 'Claimed' : 'Activating...'}
        </button>
      </div>
    </div>
  );
}

export default function Home() {
  const [boxes, setBoxes] = useState<Record<number, AnimationState>>({
    0: 'idle',
    1: 'idle',
    2: 'idle',
    3: 'idle',
    4: 'idle',
    5: 'idle',
    6: 'idle',
    7: 'idle',
  });

  const rewards = [
    '🏆 Legendary Sword',
    '💎 1000 Gems',
    '⭐ Epic Skin',
    '💰 Jackpot!',
    '🎁 Mystery Box',
    '🔮 Rare Artifact',
    '🎉 Party Pack',
    '⚡ Power Boost'
  ];

  const handleOpen = (boxId: number) => {
    // Anticipation phase
    setBoxes(prev => ({ ...prev, [boxId]: 'anticipation' }));

    setTimeout(() => {
      // Opening phase
      setBoxes(prev => ({ ...prev, [boxId]: 'opening' }));

      setTimeout(() => {
        // Revealing phase
        setBoxes(prev => ({ ...prev, [boxId]: 'revealing' }));

        setTimeout(() => {
          // Claimed phase
          setBoxes(prev => ({ ...prev, [boxId]: 'claimed' }));

          // Auto reset after some time
          setTimeout(() => {
            setBoxes(prev => ({ ...prev, [boxId]: 'idle' }));
          }, 3000);
        }, 2000);
      }, 1500);
    }, 500);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500">
            Loot Box Animation Examples
          </h1>
          <p className="text-xl text-gray-300 mb-6">
            8 Engaging Animation Patterns for Maximum User Engagement
          </p>

          {/* State Lifecycle Legend */}
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
            <h2 className="text-white font-semibold mb-3">Reward Claim Lifecycle States:</h2>
            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <span className="text-gray-200">Idle/Available</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-yellow-500 rounded-full animate-pulse"></div>
                <span className="text-gray-200">Anticipation</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-orange-500 rounded-full animate-spin"></div>
                <span className="text-gray-200">Opening/Active</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-purple-500 rounded-full animate-bounce"></div>
                <span className="text-gray-200">Revealing</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gray-500 rounded-full"></div>
                <span className="text-gray-200">Claimed/Complete</span>
              </div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <SpinningLootBox
            title="Classic Spinner"
            description="Traditional spinning box with scale effects"
            onOpen={() => handleOpen(0)}
            state={boxes[0]}
            reward={rewards[0]}
          />

          <ChestLootBox
            title="Treasure Chest"
            description="Classic chest opening with light beam"
            onOpen={() => handleOpen(1)}
            state={boxes[1]}
            reward={rewards[1]}
          />

          <CardFlipLootBox
            title="Card Flip"
            description="3D card flip reveal animation"
            onOpen={() => handleOpen(2)}
            state={boxes[2]}
            reward={rewards[2]}
          />

          <SlotMachineLootBox
            title="Slot Machine"
            description="Vegas-style spinning slots"
            onOpen={() => handleOpen(3)}
            state={boxes[3]}
            reward={rewards[3]}
          />

          <ParticleBurstLootBox
            title="Particle Burst"
            description="Explosive particle reveal effect"
            onOpen={() => handleOpen(4)}
            state={boxes[4]}
            reward={rewards[4]}
          />

          <MultiStageLootBox
            title="Multi-Stage Unlock"
            description="Progressive unlock with multiple layers"
            onOpen={() => handleOpen(5)}
            state={boxes[5]}
            reward={rewards[5]}
          />

          <ShakeLootBox
            title="Shake & Open"
            description="Shake animation before opening"
            onOpen={() => handleOpen(6)}
            state={boxes[6]}
            reward={rewards[6]}
          />

          <GlowPulseLootBox
            title="Glow Pulse"
            description="Pulsing glow with energy effects"
            onOpen={() => handleOpen(7)}
            state={boxes[7]}
            reward={rewards[7]}
          />
        </div>

        <footer className="mt-16 text-center text-gray-400 text-sm">
          <p>Click any box to see the complete animation lifecycle</p>
          <p className="mt-2">Built with Next.js & Tailwind CSS</p>
        </footer>
      </div>
    </main>
  );
}
