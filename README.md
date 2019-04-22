
### EventDispatcher
```pike
void create(WSHandler w) {
```
```pike
void ready(mapping data) {
```
```pike
void channelCreate(mapping data) {
```
```pike
void channelUpdate(mapping data) {
```
```pike
void channelDelete(mapping data) {
```
```pike
void channelPinsUpdate(mapping data) {
```
```pike
void guildCreate(mapping data) {
```
```pike
void guildUpdate(mapping data) {
```
```pike
void guildDelete(mapping data) {
```
```pike
void guildBanAdd(mapping data) {
```
```pike
void guildBanRemove(mapping data) {
```
```pike
void guildEmojisUpdate(mapping data) {
```
```pike
void emojiUpdate(Emoji newEmoji, Emoji cached, array diffs, Client client) {
```
```pike
void emojiAdd(Guild guild, Emoji newEmoji) {
```
```pike
void emojiRemove(Emoji emoji) {
```
```pike
void guildIntegrationsUpdate(mapping data) {
```
```pike
void guildMemberAdd(mapping data) {
```
```pike
void guildMemberRemove(mapping data) {
```
```pike
void guildMemberUpdate(mapping data) {
```
```pike
void guildMemberChunk(mapping data) {
```
```pike
void guildRoleCreate(mapping data) {
```
```pike
void guildRoleUpdate(mapping data) {
```
```pike
void guildRoleDelete(mapping data) {
```
```pike
void messageCreate(mapping data) {
```
```pike
void messageUpdate(mapping data) {
```
```pike
void messageDelete(mapping data) {
```
```pike
void messageDeleteBulk(mapping data) {
```
```pike
void messageReactionAdd(mapping data) {
```
```pike
void messageReactionRemove(mapping data) {
```
```pike
void messageReactionRemoveAll(mapping data) {
```
```pike
void presenceUpdate(mapping data) {
```
```pike
void typingStart(mapping data) {
```
```pike
void userUpdate(mapping data) {
```
### EventHandlers
```pike
void create() {
```
### GatewayDispatcher
```pike
void create(WSHandler w) {
```
```pike
void handleHelloEvent(mapping data) {
```
```pike
void handleHBackEvent() {
```
```pike
void handleInvalidSessionEvent() {
```
```pike
void handleReconnectionRequest() {
```
### WSHandler
```pike
void create(WSManager w) {
```
```pike
void handle(mapping a) {
```
### WSManager
```pike
void create(Client c) {
```
```pike
void start(bool reconnect, bool resume) {
```
```pike
void onopen() {
```
```pike
void heartbeat(int ms) {
```
### Activity
```pike
void create(mapping data) {
```
### ActivityAssets
```pike
void create(mapping data) {
```
### ActivityParty
```pike
void create(mapping data) {
```
### ActivitySecrets
```pike
void create(mapping data) {
```
### ActivityTimestamps
```pike
void create(mapping data) {
```
### Attachment
```pike
void create(Client c, mapping data) {
```
### Channel
```pike
void create(mapping data) {
```
### ChannelCategory
```pike
void create(Client c, mapping data, void|Guild g) {
```
### ChannelDM
```pike
void create(Client c, mapping data) {
```
### ChannelVoice
```pike
void create(Client c, mapping data, void|Guild g) {
```
### ClientUser
```pike
void create(Client c, mapping data) {
```
```pike
string whenCreated() {
```
```pike
void newPresence(mapping options) {
```
### Emoji
```pike
void create(Client c, Guild g, mapping data) {
```
### Guild
```pike
void create(Client c, mapping data) {
```
### GuildIntegration
```pike
void create(Client client, mapping data) {
```
### GuildMember
```pike
void create(Client c, Guild g, mapping data) {
```
### GuildTextChannel
```pike
void create(Client c, mapping data, void|Guild g) {
```
### Invite
```pike
void create(Client client, mapping data) {
```
### Message
```pike
void create(Client client, mapping data) {
```
### Permission
```pike
void create(Client client, mapping data, Guild|void guild) {
```
### Presence
```pike
void create(mapping data) {
```
### Reaction
```pike
void create(Client c, Message msg, mapping data) {
```
### ReactionEmoji
```pike
void create(Client c, Reaction r, mapping data) {
```
### RegionVoice
```pike
void create(Client c, Guild g, mapping data) {
```
### Role
```pike
void create(Client c, Guild g, mapping data) {
```
```pike
bool ownPermission(string|int perm) {
```
```pike
return PermissionUtils()->own(permissions, perm);
```
### User
```pike
void create(Client c, mapping data) {
```
```pike
string whenCreated() {
```
### APIManager
```pike
void create(Client c) {
```
```pike
mapping getHeaders() {
```
```pike
return Constants().API->get("headers")(client);
```
```pike
bool hasError(mixed|void response) {
```
```pike
mixed getChannel(string channelId) {
```
```pike
mixed modifyChannel(string id, mapping payload) {
```
```pike
mixed deleteChannel(string id) {
```
```pike
Message|void getChannelMessage(string channelId, string msgId) {
```
```pike
Message|void createMessage(string channelId, string content, mapping|void additional) {
```
```pike
void createReaction(string channelId, string messageId, string|Emoji emoji) {
```
```pike
void deleteOwnReaction(string channelId, string messageId, string|Emoji emoji) {
```
```pike
void deleteUserReaction(string channelId, string messageId, string userId, string|Emoji emoji) {
```
```pike
void deleteAllReactions(string channelId, string messageId) {
```
```pike
Message|void editMessage(string channelId, string messageId, mapping payload) {
```
```pike
void deleteMessage(string channelId, string messageId) {
```
```pike
void bulkDeleteMessages(string channelId, int amount) {
```
```pike
void editChannelPermissions(string channelId, string|Role|GuildMember roleOrMember, mapping payload) {
```
```pike
Invite createChannelInvite(string channelId, mapping|void payload) {
```
```pike
void triggerTypingIndicator(string channelId) {
```
```pike
void addPinnedChannelMessage(string channelId, string messageId) {
```
```pike
void deletePinnedChannelMessage(string channelId, string messageId) {
```
```pike
Emoji getGuildEmoji(string guildId, string emojiId) {
```
```pike
Emoji createGuildEmoji(string guildId, mapping payload) {
```
```pike
Emoji modifyGuildEmoji(string guildId, string emojiId, mapping payload) {
```
```pike
void deleteGuildEmoji(string guildId, string emojiId) {
```
```pike
Guild createGuild(mapping payload) {
```
```pike
Guild getGuild(string guildId) {
```
```pike
Guild modifyGuild(string guildId, mapping payload) {
```
```pike
void deleteGuild(string guildId) {
```
```pike
ChannelVoice|ChannelCategory|GuildTextChannel createGuildChannel(string guildId, mapping payload) {
```
```pike
ChannelVoice|ChannelCategory|GuildTextChannel modifyGuildChannelPosition(string guildId, array payload) {
```
```pike
GuildMember getGuildMember(string guildId, string userId) {
```
```pike
void modifyGuildMember(string guildId, string userId, mapping payload) {
```
```pike
void modifyCurrentUserNick(string guildId, mapping payload) {
```
```pike
void addGuildMemberRole(string guildId, string userId, string roleId) {
```
```pike
void deleteGuildMemberRole(string guildId, string userId, string roleId) {
```
```pike
void removeGuildMember(string guildId, string userId) {
```
```pike
mapping getGuildBan(string guildId, string userId) {
```
```pike
void createGuildBan(string guildId, string userId, mapping|void payload) {
```
```pike
void removeGuildBan(string guildId, string userId) {
```
```pike
Role getGuildRole(string guildId, string roleId) {
```
```pike
void modifyGuildRolePositions(string guildId, array payload) {
```
```pike
Role modifyGuildRole(string guildId, string userId, mapping payload) {
```
```pike
void deleteGuildRole(string guildId, string userId) {
```
```pike
int getGuildPruneCount(string guildId, int|string days) {
```
```pike
int beginGuildPrune(string guildId, mapping payload) {
```
```pike
GuildIntegration createGuildIntegration(string guildId, mapping payload) {
```
```pike
GuildIntegration modifyGuildIntegration(string guildId, string integrationId, mapping payload) {
```
```pike
void deleteGuildIntegration(string guildId, string integrationId) {
```
```pike
void syncGuildIntegration(string guildId, string integrationId) {
```
```pike
mapping getGuildEmbed(string guildId) {
```
```pike
mapping modifyGuildEmbed(string guildId, mapping payload) {
```
```pike
Invite getGuildVanityURL(string guildId) {
```
```pike
mixed getGuildWidgetImage(string guildId, string|void style) {
```
```pike
Invite getInvite(string inviteCode) {
```
```pike
void deleteInvite(string inviteCode) {
```
```pike
User getUser(string userId) {
```
```pike
void leaveGuild(string guildId) {
```
### EmbedConstructor
```pike
void create() {}
```
```pike
this_program assignTitle(string t) {
```
```pike
this_program assignType(string t) {
```
```pike
this_program assignDescription(string d) {
```
```pike
this_program assignURL(string u) {
```
```pike
this_program assignTimestamp(string t) {
```
```pike
this_program assignColor(int c) {
```
```pike
this_program assignFooter(mapping f) {
```
```pike
this_program assignImage(mapping i) {
```
```pike
this_program assignVideo(mapping v) {
```
```pike
this_program assignThumbnail(mapping t) {
```
```pike
this_program assignProvider(mapping p) {
```
```pike
this_program assignAuthor(mapping a) {
```
```pike
this_program addField(mapping f) {
```
```pike
mapping construct() {
```
### EventUtils
```pike
void handle(string event, function handler) {
```
### Gallon
```pike
void create(mapping i) {
```
```pike
mixed get(string key) {
```
```pike
void assign(string key, mixed value) {
```
```pike
array arrayOfValues() {
```
```pike
array arrayOfKeys() {
```
```pike
bool has(string key) {
```
```pike
mixed first() {
```
```pike
mixed last() {
```
```pike
void delete(string key) {
```
```pike
void reset() {
```
```pike
mixed lookFor(string property, mixed value) {
```
### Misc
```pike
array mappingDiff(mapping|object a, mapping|object b) {
```
```pike
void fixNullables(mixed instance, mixed data) {
```
### Permission
```pike
int own(int permissions, string|int perm) {
```
```pike
int add(int permissions, array permsToOverwrite) {
```
```pike
int remove(int permissions, array permsToOverwrite) {
```
### RestUtils
```pike
mixed getChannelAccordingToType(int type, mapping data, Client client, void|Guild g) {
```
```pike
string constructAttachmentUpload(string file, string name, bool content, string contentStr) {
```
```pike
Guild fetchCacheGuild(string guildId, Client client) {
```
```pike
mixed fetchCacheChannel(string channelId, Client client) {
```
```pike
User fetchCacheUser(string userId, Client client) {
```
```pike
Emoji fetchCacheEmoji(string emojiId, Client client, Guild|void guild) {
```
```pike
Role fetchCacheRole(string roleId, Client client, Guild|void guild) {
```
```pike
GuildMember fetchCacheGuildMember(string memberId, Client client, Guild|void guild) {
```
### Snowflake
```pike
mapping extractData(string id) {
```