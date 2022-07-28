const QueueCard = ({ queue }) => {
	// Return queue card only if the player has ranked data for the queue
	if (!queue.tier) {
		return null;
	}

	return (
		<div className="rounded-xl divide-y divide-slate-600 bg-primary-light text-slate-400 text-sm">
			{/* Queue */}
			<h3 className="text-white px-4 py-2">{queue.queueType}</h3>

			<div className="flex items-center px-4 space-x-2">
				{/* Rank image */}
				<img
					src={`https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-static-assets/global/default/images/ranked-mini-crests/${queue.tier.toLowerCase()}.png`}
					alt=""
				/>

				<div className="grow grid grid-cols-2 gap-1 justify-between">
					{/* Rank */}
					<div className="text-white font-semibold">
						{queue.tier} {queue.rank}
					</div>

					{/* Wins / losses */}
					<div className="text-right">
						{queue.wins}W {queue.losses}L
					</div>

					{/* LP */}
					<div>{queue.leaguePoints} LP</div>

					{/* Win rate */}
					<div className="text-right">
						Win Rate{' '}
						{Math.round((queue.wins / (queue.wins + queue.losses)) * 100)}%
					</div>
				</div>
			</div>
		</div>
	);
};

export default QueueCard;
