let protooPort = 4443;

if (window.location.hostname === 'test.mediasoup.org')
	protooPort = 4444;

export function getProtooUrl({ roomId, peerId, forceH264 })
{
	const hostname = window.location.hostname;
	let url = `wss://${hostname}:${protooPort}/?roomId=${roomId}&peerId=${peerId}`;

	if (forceH264)
		url = `${url}&forceH264=true`;

	return url;
}
