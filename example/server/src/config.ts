import { MediaKind, RtpCodecCapability } from "mediasoup/node/lib/types";

const mediaCodecs: RtpCodecCapability[] = [
  {
    kind: "audio" as MediaKind,
    mimeType: "audio/opus",
    clockRate: 48000,
    channels: 2,
  },
  {
    kind: "video" as MediaKind,
    mimeType: "video/VP8",
    clockRate: 90000,
  },
  {
    kind: "video" as MediaKind,
    mimeType: "video/H264",
    clockRate: 90000,parameters:{
      "level-asymmetry-allowed":1,
      "packetization-mode":1,
      "profile-level-id":"42e01f",
    }
  },
];

const config = {
  listenIp: "0.0.0.0",
  listenPort: 3000,
  sslCrt: "cert.pem",
  sslKey: "rsa.key",
  mediasoup: {
    worker: {
      rtcMinPort: 10000,
      rtcMaxPort: 10100,
      logLevel: "debug",
      logTags: [
        "info",
        "ice",
        "dtls",
        "rtp",
        "srtp",
        "rtcp",
        "rtx",
        "bwe",
        "score",
        "simulcast",
        "svc",
        "sctp",
        "message",
      ],
    },
    router: {
      mediaCodecs,
    },
    webRtcTransport: {
      listenIps: [
        {
          ip: "127.0.0.1",
          announcedIp: null,
        },
      ],
      maxIncomingBitrate: 1500000,
      initialAvailableOutgoingBitrate: 1000000,
    },
  },
};

export default config;
