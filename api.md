# PaxeerGovernanceSDK

Types:

- <code><a href="./src/resources/top-level.ts">RetrieveAPIInfoResponse</a></code>

Methods:

- <code title="get /">client.<a href="./src/index.ts">retrieveAPIInfo</a>() -> RetrieveAPIInfoResponse</code>

# Health

Types:

- <code><a href="./src/resources/health.ts">HealthCheckResponse</a></code>

Methods:

- <code title="get /health">client.health.<a href="./src/resources/health.ts">check</a>() -> HealthCheckResponse</code>

# Staking

Types:

- <code><a href="./src/resources/staking.ts">StakingCalculateEarlyUnstakePenaltyResponse</a></code>
- <code><a href="./src/resources/staking.ts">StakingRetrieveStakeHistoryResponse</a></code>
- <code><a href="./src/resources/staking.ts">StakingRetrieveStakeInfoResponse</a></code>
- <code><a href="./src/resources/staking.ts">StakingRetrieveStatsResponse</a></code>
- <code><a href="./src/resources/staking.ts">StakingRetrieveTopStakersResponse</a></code>
- <code><a href="./src/resources/staking.ts">StakingRetrieveTotalResponse</a></code>
- <code><a href="./src/resources/staking.ts">StakingRetrieveUnstakeHistoryResponse</a></code>
- <code><a href="./src/resources/staking.ts">StakingRetrieveVotingPowerResponse</a></code>

Methods:

- <code title="get /staking/{address}/penalty">client.staking.<a href="./src/resources/staking.ts">calculateEarlyUnstakePenalty</a>(address, { ...params }) -> StakingCalculateEarlyUnstakePenaltyResponse</code>
- <code title="get /staking/{address}/history">client.staking.<a href="./src/resources/staking.ts">retrieveStakeHistory</a>(address, { ...params }) -> StakingRetrieveStakeHistoryResponse</code>
- <code title="get /staking/{address}">client.staking.<a href="./src/resources/staking.ts">retrieveStakeInfo</a>(address) -> StakingRetrieveStakeInfoResponse</code>
- <code title="get /staking/stats">client.staking.<a href="./src/resources/staking.ts">retrieveStats</a>() -> StakingRetrieveStatsResponse</code>
- <code title="get /staking/top">client.staking.<a href="./src/resources/staking.ts">retrieveTopStakers</a>({ ...params }) -> StakingRetrieveTopStakersResponse</code>
- <code title="get /staking/total">client.staking.<a href="./src/resources/staking.ts">retrieveTotal</a>() -> StakingRetrieveTotalResponse</code>
- <code title="get /staking/{address}/unstakes">client.staking.<a href="./src/resources/staking.ts">retrieveUnstakeHistory</a>(address, { ...params }) -> StakingRetrieveUnstakeHistoryResponse</code>
- <code title="get /staking/{address}/voting-power">client.staking.<a href="./src/resources/staking.ts">retrieveVotingPower</a>(address, { ...params }) -> StakingRetrieveVotingPowerResponse</code>

# Proposals

Types:

- <code><a href="./src/resources/proposals/proposals.ts">Pagination</a></code>
- <code><a href="./src/resources/proposals/proposals.ts">ProposalSummary</a></code>
- <code><a href="./src/resources/proposals/proposals.ts">ProposalRetrieveResponse</a></code>
- <code><a href="./src/resources/proposals/proposals.ts">ProposalListResponse</a></code>
- <code><a href="./src/resources/proposals/proposals.ts">ProposalGetAnalyticsResponse</a></code>
- <code><a href="./src/resources/proposals/proposals.ts">ProposalGetStatsResponse</a></code>
- <code><a href="./src/resources/proposals/proposals.ts">ProposalListActiveResponse</a></code>
- <code><a href="./src/resources/proposals/proposals.ts">ProposalListCategoriesResponse</a></code>
- <code><a href="./src/resources/proposals/proposals.ts">ProposalSyncResponse</a></code>

Methods:

- <code title="get /proposals/{proposalId}">client.proposals.<a href="./src/resources/proposals/proposals.ts">retrieve</a>(proposalID) -> ProposalRetrieveResponse</code>
- <code title="get /proposals">client.proposals.<a href="./src/resources/proposals/proposals.ts">list</a>({ ...params }) -> ProposalListResponse</code>
- <code title="get /proposals/{proposalId}/analytics">client.proposals.<a href="./src/resources/proposals/proposals.ts">getAnalytics</a>(proposalID) -> unknown</code>
- <code title="get /proposals/stats">client.proposals.<a href="./src/resources/proposals/proposals.ts">getStats</a>() -> ProposalGetStatsResponse</code>
- <code title="get /proposals/active">client.proposals.<a href="./src/resources/proposals/proposals.ts">listActive</a>() -> ProposalListActiveResponse</code>
- <code title="get /proposals/categories">client.proposals.<a href="./src/resources/proposals/proposals.ts">listCategories</a>() -> ProposalListCategoriesResponse</code>
- <code title="post /proposals/{proposalId}/sync">client.proposals.<a href="./src/resources/proposals/proposals.ts">sync</a>(proposalID) -> ProposalSyncResponse</code>
- <code title="put /proposals/{proposalId}/featured">client.proposals.<a href="./src/resources/proposals/proposals.ts">updateFeatured</a>(proposalID, { ...params }) -> void</code>

## Votes

Types:

- <code><a href="./src/resources/proposals/votes.ts">Vote</a></code>
- <code><a href="./src/resources/proposals/votes.ts">VoteListResponse</a></code>

Methods:

- <code title="get /proposals/{proposalId}/votes/{address}">client.proposals.votes.<a href="./src/resources/proposals/votes.ts">retrieve</a>(address, { ...params }) -> Vote</code>
- <code title="get /proposals/{proposalId}/votes">client.proposals.votes.<a href="./src/resources/proposals/votes.ts">list</a>(proposalID, { ...params }) -> VoteListResponse</code>

# Delegates

Types:

- <code><a href="./src/resources/delegates.ts">Delegate</a></code>
- <code><a href="./src/resources/delegates.ts">DelegateProfile</a></code>
- <code><a href="./src/resources/delegates.ts">DelegateListResponse</a></code>
- <code><a href="./src/resources/delegates.ts">DelegateListDelegatorsResponse</a></code>
- <code><a href="./src/resources/delegates.ts">DelegateListTopResponse</a></code>
- <code><a href="./src/resources/delegates.ts">DelegateListVotesResponse</a></code>
- <code><a href="./src/resources/delegates.ts">DelegateRetrieveStatsResponse</a></code>

Methods:

- <code title="post /delegates">client.delegates.<a href="./src/resources/delegates.ts">create</a>({ ...params }) -> Delegate</code>
- <code title="get /delegates/{address}">client.delegates.<a href="./src/resources/delegates.ts">retrieve</a>(address) -> Delegate</code>
- <code title="put /delegates/{address}">client.delegates.<a href="./src/resources/delegates.ts">update</a>(address, { ...params }) -> Delegate</code>
- <code title="get /delegates">client.delegates.<a href="./src/resources/delegates.ts">list</a>({ ...params }) -> DelegateListResponse</code>
- <code title="get /delegates/{address}/delegators">client.delegates.<a href="./src/resources/delegates.ts">listDelegators</a>(address) -> DelegateListDelegatorsResponse</code>
- <code title="get /delegates/top">client.delegates.<a href="./src/resources/delegates.ts">listTop</a>({ ...params }) -> DelegateListTopResponse</code>
- <code title="get /delegates/{address}/votes">client.delegates.<a href="./src/resources/delegates.ts">listVotes</a>(address, { ...params }) -> DelegateListVotesResponse</code>
- <code title="get /delegates/stats">client.delegates.<a href="./src/resources/delegates.ts">retrieveStats</a>() -> unknown</code>
- <code title="post /delegates/{address}/sync">client.delegates.<a href="./src/resources/delegates.ts">sync</a>(address) -> void</code>

# Treasury

Types:

- <code><a href="./src/resources/treasury/treasury.ts">TreasuryListBalancesResponse</a></code>
- <code><a href="./src/resources/treasury/treasury.ts">TreasuryListBudgetsResponse</a></code>
- <code><a href="./src/resources/treasury/treasury.ts">TreasuryListFlowsResponse</a></code>
- <code><a href="./src/resources/treasury/treasury.ts">TreasuryListRecipientsResponse</a></code>
- <code><a href="./src/resources/treasury/treasury.ts">TreasuryListTransactionsResponse</a></code>
- <code><a href="./src/resources/treasury/treasury.ts">TreasuryRetrieveStatsResponse</a></code>

Methods:

- <code title="get /treasury/balances">client.treasury.<a href="./src/resources/treasury/treasury.ts">listBalances</a>() -> TreasuryListBalancesResponse</code>
- <code title="get /treasury/budgets">client.treasury.<a href="./src/resources/treasury/treasury.ts">listBudgets</a>({ ...params }) -> TreasuryListBudgetsResponse</code>
- <code title="get /treasury/flows">client.treasury.<a href="./src/resources/treasury/treasury.ts">listFlows</a>({ ...params }) -> TreasuryListFlowsResponse</code>
- <code title="get /treasury/recipients">client.treasury.<a href="./src/resources/treasury/treasury.ts">listRecipients</a>({ ...params }) -> TreasuryListRecipientsResponse</code>
- <code title="get /treasury/transactions">client.treasury.<a href="./src/resources/treasury/treasury.ts">listTransactions</a>({ ...params }) -> TreasuryListTransactionsResponse</code>
- <code title="get /treasury/stats">client.treasury.<a href="./src/resources/treasury/treasury.ts">retrieveStats</a>() -> TreasuryRetrieveStatsResponse</code>

## Balance

Types:

- <code><a href="./src/resources/treasury/balance.ts">TreasuryBalance</a></code>
- <code><a href="./src/resources/treasury/balance.ts">BalanceRetrieveResponse</a></code>

Methods:

- <code title="get /treasury/balance">client.treasury.balance.<a href="./src/resources/treasury/balance.ts">retrieve</a>() -> BalanceRetrieveResponse</code>
- <code title="get /treasury/balance/{tokenAddress}">client.treasury.balance.<a href="./src/resources/treasury/balance.ts">retrieveByToken</a>(tokenAddress) -> TreasuryBalance</code>

# Grants

Types:

- <code><a href="./src/resources/grants/grants.ts">Grant</a></code>
- <code><a href="./src/resources/grants/grants.ts">GrantListResponse</a></code>
- <code><a href="./src/resources/grants/grants.ts">GrantGetByApplicantResponse</a></code>
- <code><a href="./src/resources/grants/grants.ts">GrantGetProgramsResponse</a></code>
- <code><a href="./src/resources/grants/grants.ts">GrantGetStatsResponse</a></code>

Methods:

- <code title="get /grants/{grantId}">client.grants.<a href="./src/resources/grants/grants.ts">retrieve</a>(grantID) -> Grant</code>
- <code title="get /grants">client.grants.<a href="./src/resources/grants/grants.ts">list</a>({ ...params }) -> GrantListResponse</code>
- <code title="get /grants/applicant/{address}">client.grants.<a href="./src/resources/grants/grants.ts">getByApplicant</a>(address) -> GrantGetByApplicantResponse</code>
- <code title="get /grants/programs">client.grants.<a href="./src/resources/grants/grants.ts">getPrograms</a>({ ...params }) -> GrantGetProgramsResponse</code>
- <code title="get /grants/stats">client.grants.<a href="./src/resources/grants/grants.ts">getStats</a>() -> unknown</code>
- <code title="post /grants">client.grants.<a href="./src/resources/grants/grants.ts">submit</a>({ ...params }) -> Grant</code>

## Milestones

Types:

- <code><a href="./src/resources/grants/milestones.ts">MilestoneListResponse</a></code>

Methods:

- <code title="get /grants/{grantId}/milestones">client.grants.milestones.<a href="./src/resources/grants/milestones.ts">list</a>(grantID) -> MilestoneListResponse</code>
- <code title="post /grants/{grantId}/milestones/{milestoneIndex}/submit">client.grants.milestones.<a href="./src/resources/grants/milestones.ts">submit</a>(milestoneIndex, { ...params }) -> void</code>

# Analytics

Types:

- <code><a href="./src/resources/analytics/analytics.ts">AnalyticsRetrieveDashboardResponse</a></code>
- <code><a href="./src/resources/analytics/analytics.ts">AnalyticsRetrieveHistoryResponse</a></code>
- <code><a href="./src/resources/analytics/analytics.ts">AnalyticsRetrieveParticipationResponse</a></code>

Methods:

- <code title="get /analytics/dashboard">client.analytics.<a href="./src/resources/analytics/analytics.ts">retrieveDashboard</a>() -> AnalyticsRetrieveDashboardResponse</code>
- <code title="get /analytics/history">client.analytics.<a href="./src/resources/analytics/analytics.ts">retrieveHistory</a>({ ...params }) -> AnalyticsRetrieveHistoryResponse</code>
- <code title="get /analytics/participation">client.analytics.<a href="./src/resources/analytics/analytics.ts">retrieveParticipation</a>() -> unknown</code>

## Voters

Types:

- <code><a href="./src/resources/analytics/voters.ts">VoterRetrieveActivityResponse</a></code>
- <code><a href="./src/resources/analytics/voters.ts">VoterRetrieveTopResponse</a></code>

Methods:

- <code title="get /analytics/voters/{address}">client.analytics.voters.<a href="./src/resources/analytics/voters.ts">retrieveActivity</a>(address) -> unknown</code>
- <code title="get /analytics/voters/top">client.analytics.voters.<a href="./src/resources/analytics/voters.ts">retrieveTop</a>({ ...params }) -> VoterRetrieveTopResponse</code>

## Proposals

Types:

- <code><a href="./src/resources/analytics/proposals.ts">ProposalRetrieveMetricsResponse</a></code>

Methods:

- <code title="get /analytics/proposals/{proposalId}/metrics">client.analytics.proposals.<a href="./src/resources/analytics/proposals.ts">retrieveMetrics</a>(proposalID) -> unknown</code>

# Users

Types:

- <code><a href="./src/resources/users/users.ts">User</a></code>

Methods:

- <code title="get /users/{address}">client.users.<a href="./src/resources/users/users.ts">getProfile</a>(address) -> UserProfile</code>
- <code title="put /users/{address}">client.users.<a href="./src/resources/users/users.ts">updateProfile</a>(address, { ...params }) -> User</code>

## Auth

Types:

- <code><a href="./src/resources/users/auth.ts">AuthGetNonceResponse</a></code>
- <code><a href="./src/resources/users/auth.ts">AuthLoginResponse</a></code>

Methods:

- <code title="get /users/auth/nonce">client.users.auth.<a href="./src/resources/users/auth.ts">getNonce</a>() -> AuthGetNonceResponse</code>
- <code title="post /users/auth/login">client.users.auth.<a href="./src/resources/users/auth.ts">login</a>({ ...params }) -> AuthLoginResponse</code>

## Me

Types:

- <code><a href="./src/resources/users/me/me.ts">UserProfile</a></code>

Methods:

- <code title="get /users/me">client.users.me.<a href="./src/resources/users/me/me.ts">getProfile</a>() -> UserProfile</code>

### Notifications

Types:

- <code><a href="./src/resources/users/me/notifications.ts">NotificationListResponse</a></code>
- <code><a href="./src/resources/users/me/notifications.ts">NotificationGetUnreadCountResponse</a></code>

Methods:

- <code title="get /users/me/notifications">client.users.me.notifications.<a href="./src/resources/users/me/notifications.ts">list</a>({ ...params }) -> NotificationListResponse</code>
- <code title="get /users/me/notifications/unread">client.users.me.notifications.<a href="./src/resources/users/me/notifications.ts">getUnreadCount</a>() -> NotificationGetUnreadCountResponse</code>
- <code title="put /users/me/notifications/read-all">client.users.me.notifications.<a href="./src/resources/users/me/notifications.ts">markAllAsRead</a>() -> void</code>
- <code title="put /users/me/notifications/{notificationId}/read">client.users.me.notifications.<a href="./src/resources/users/me/notifications.ts">markAsRead</a>(notificationID) -> void</code>
