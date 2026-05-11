import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';
import { ExternalLink } from 'lucide-react';

const API_KEY =
  process.env.GOOGLE_MAPS_PLATFORM_KEY ||
  (import.meta as any).env?.VITE_GOOGLE_MAPS_PLATFORM_KEY ||
  (globalThis as any).GOOGLE_MAPS_PLATFORM_KEY ||
  '';

const hasValidKey = Boolean(API_KEY) && API_KEY !== 'YOUR_API_KEY';

export default function GoogleMap() {
  const position = { lat: -16.3262662, lng: -48.9242944 };
  const address = "Av. Santos Dumont, QD 51 - LT 13 setor 2º Etapa - Jardim das Americas, Anápolis - GO, 75070-445";
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;

  if (!hasValidKey) {
    return (
      <div className="flex items-center justify-center h-[400px] bg-zinc-100 dark:bg-zinc-900 rounded-lg border-2 border-dashed border-zinc-300 dark:border-zinc-700 p-6 text-center">
        <div className="max-w-md">
          <h2 className="text-xl font-bold mb-4">Configuração de Mapa Necessária</h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6">
            Para visualizar o mapa, você precisa adicionar uma chave de API do Google Maps Platform nos Secrets do projeto.
          </p>
          <div className="text-xs text-left space-y-2 bg-white dark:bg-black p-4 rounded border border-zinc-200 dark:border-zinc-800">
            <p><strong>Passo 1:</strong> Obtenha uma chave em <a href="https://console.cloud.google.com/google/maps-apis/start" target="_blank" rel="noopener" className="text-primary-dark underline">Google Cloud Console</a></p>
            <p><strong>Passo 2:</strong> Adicione <code>GOOGLE_MAPS_PLATFORM_KEY</code> em <strong>Settings (⚙️)</strong> → <strong>Secrets</strong></p>
          </div>
          <a 
            href={googleMapsUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-950 font-bold rounded-lg hover:scale-105 transition-transform"
          >
            Ver Rota no Google Maps
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[450px] md:h-full min-h-[400px] rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-xl group">
      <APIProvider apiKey={API_KEY} version="weekly">
        <Map
          defaultCenter={position}
          defaultZoom={15}
          mapId="EDUARDO_STUDIO_MAP"
          internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
          style={{ width: '100%', height: '100%' }}
          gestureHandling={'greedy'}
          disableDefaultUI={false}
        >
          <AdvancedMarker position={position} title="Eduardo Silva Designer">
            <Pin background="#fcd34d" glyphColor="#000" borderColor="#fbbf24" />
          </AdvancedMarker>
        </Map>
      </APIProvider>
      
      {/* Route Button Overlay */}
      <div className="absolute bottom-6 left-6 right-6 md:left-auto md:w-auto">
        <a 
          href={googleMapsUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 px-6 py-4 bg-zinc-950/90 text-white font-extrabold rounded-lg backdrop-blur-sm border border-white/10 hover:bg-zinc-900 transition-all shadow-2xl"
        >
          COMO CHEGAR / VER ROTA
          <ExternalLink size={18} />
        </a>
      </div>
    </div>
  );
}
