## This was automatically generated!
- [EventDispatcher](https://github.com/theonlyartz/FisherDocParser/blob/master/README.md#EventDispatcher)
- [EventHandlers](https://github.com/theonlyartz/FisherDocParser/blob/master/README.md#EventHandlers)
- [GatewayDispatcher](https://github.com/theonlyartz/FisherDocParser/blob/master/README.md#GatewayDispatcher)
- [WSHandler](https://github.com/theonlyartz/FisherDocParser/blob/master/README.md#WSHandler)
- [WSManager](https://github.com/theonlyartz/FisherDocParser/blob/master/README.md#WSManager)
- [Activity](https://github.com/theonlyartz/FisherDocParser/blob/master/README.md#Activity)
- [ActivityAssets](https://github.com/theonlyartz/FisherDocParser/blob/master/README.md#ActivityAssets)
- [ActivityParty](https://github.com/theonlyartz/FisherDocParser/blob/master/README.md#ActivityParty)
- [ActivitySecrets](https://github.com/theonlyartz/FisherDocParser/blob/master/README.md#ActivitySecrets)
- [ActivityTimestamps](https://github.com/theonlyartz/FisherDocParser/blob/master/README.md#ActivityTimestamps)
- [Attachment](https://github.com/theonlyartz/FisherDocParser/blob/master/README.md#Attachment)
- [Channel](https://github.com/theonlyartz/FisherDocParser/blob/master/README.md#Channel)
- [ChannelCategory](https://github.com/theonlyartz/FisherDocParser/blob/master/README.md#ChannelCategory)
- [ChannelDM](https://github.com/theonlyartz/FisherDocParser/blob/master/README.md#ChannelDM)
- [ChannelGroupDM](https://github.com/theonlyartz/FisherDocParser/blob/master/README.md#ChannelGroupDM)
- [ChannelVoice](https://github.com/theonlyartz/FisherDocParser/blob/master/README.md#ChannelVoice)
- [ClientUser](https://github.com/theonlyartz/FisherDocParser/blob/master/README.md#ClientUser)
- [Emoji](https://github.com/theonlyartz/FisherDocParser/blob/master/README.md#Emoji)
- [Guild](https://github.com/theonlyartz/FisherDocParser/blob/master/README.md#Guild)
- [GuildChannel](https://github.com/theonlyartz/FisherDocParser/blob/master/README.md#GuildChannel)
- [GuildIntegration](https://github.com/theonlyartz/FisherDocParser/blob/master/README.md#GuildIntegration)
- [GuildMember](https://github.com/theonlyartz/FisherDocParser/blob/master/README.md#GuildMember)
- [GuildTextChannel](https://github.com/theonlyartz/FisherDocParser/blob/master/README.md#GuildTextChannel)
- [Invite](https://github.com/theonlyartz/FisherDocParser/blob/master/README.md#Invite)
- [Message](https://github.com/theonlyartz/FisherDocParser/blob/master/README.md#Message)
- [Permission](https://github.com/theonlyartz/FisherDocParser/blob/master/README.md#Permission)
- [Presence](https://github.com/theonlyartz/FisherDocParser/blob/master/README.md#Presence)
- [Reaction](https://github.com/theonlyartz/FisherDocParser/blob/master/README.md#Reaction)
- [ReactionEmoji](https://github.com/theonlyartz/FisherDocParser/blob/master/README.md#ReactionEmoji)
- [RegionVoice](https://github.com/theonlyartz/FisherDocParser/blob/master/README.md#RegionVoice)
- [Role](https://github.com/theonlyartz/FisherDocParser/blob/master/README.md#Role)
- [User](https://github.com/theonlyartz/FisherDocParser/blob/master/README.md#User)
- [Webhook](https://github.com/theonlyartz/FisherDocParser/blob/master/README.md#Webhook)
- [APIManager](https://github.com/theonlyartz/FisherDocParser/blob/master/README.md#APIManager)
- [Constants](https://github.com/theonlyartz/FisherDocParser/blob/master/README.md#Constants)
- [EmbedConstructor](https://github.com/theonlyartz/FisherDocParser/blob/master/README.md#EmbedConstructor)
- [EventUtils](https://github.com/theonlyartz/FisherDocParser/blob/master/README.md#EventUtils)
- [Gallon](https://github.com/theonlyartz/FisherDocParser/blob/master/README.md#Gallon)
- [Misc](https://github.com/theonlyartz/FisherDocParser/blob/master/README.md#Misc)
- [Permission](https://github.com/theonlyartz/FisherDocParser/blob/master/README.md#Permission)
- [RestUtils](https://github.com/theonlyartz/FisherDocParser/blob/master/README.md#RestUtils)
- [Snowflake](https://github.com/theonlyartz/FisherDocParser/blob/master/README.md#Snowflake)

### EventDispatcher
#### Class variables
```pike
// Public
WSHandler wsHandler;
Client client;
array diffs;
Emoji cached;
Emoji newEmoji;
// Private
protected GuildCacher guildCacher;
protected RestUtils restUtils;
```
#### Method Signatures

```pike
void create(WSHandler w);
```
```pike
void ready(mapping data);
```
```pike
void channelCreate(mapping data);
```
```pike
void channelUpdate(mapping data);
```
```pike
void channelDelete(mapping data);
```
```pike
void channelPinsUpdate(mapping data);
```
```pike
void guildCreate(mapping data);
```
```pike
void guildUpdate(mapping data);
```
```pike
void guildDelete(mapping data);
```
```pike
void guildBanAdd(mapping data);
```
```pike
void guildBanRemove(mapping data);
```
```pike
void guildEmojisUpdate(mapping data);
```
```pike
void emojiUpdate(Emoji newEmoji, Emoji cached, array diffs, Client client);
```
```pike
void emojiAdd(Guild guild, Emoji newEmoji);
```
```pike
void emojiRemove(Emoji emoji);
```
```pike
void guildIntegrationsUpdate(mapping data);
```
```pike
void guildMemberAdd(mapping data);
```
```pike
void guildMemberRemove(mapping data);
```
```pike
void guildMemberUpdate(mapping data);
```
```pike
void guildMemberChunk(mapping data);
```
```pike
void guildRoleCreate(mapping data);
```
```pike
void guildRoleUpdate(mapping data);
```
```pike
void guildRoleDelete(mapping data);
```
```pike
void messageCreate(mapping data);
```
```pike
void messageUpdate(mapping data);
```
```pike
void messageDelete(mapping data);
```
```pike
void messageDeleteBulk(mapping data);
```
```pike
void messageReactionAdd(mapping data);
```
```pike
void messageReactionRemove(mapping data);
```
```pike
void messageReactionRemoveAll(mapping data);
```
```pike
void presenceUpdate(mapping data);
```
```pike
void typingStart(mapping data);
```
```pike
void userUpdate(mapping data);
```
### EventHandlers
#### Class variables
```pike
array ready;
array channelCreate;
array channelUpdate;
array channelDelete;
array channelPinsUpdate;
array guildCreate;
array guildUpdate;
array guildDelete;
array guildBanAdd;
array guildBanRemove;
array guildEmojiUpdate;
array guildEmojiRemove;
array guildEmojiAdd;
array guildIntegrationUpdate;
array guildMemberAdd;
array guildMemberRemove;
array guildMembersChunk;
array guildMemberUpdate;
array guildRoleCreate;
array guildRoleDelete;
array guildRoleUpdate;
array messageCreate;
array messageUpdate;
array messageDelete;
array messageDeleteBulk;
array messageReactionAdd;
array messageReactionRemove;
array messageReactionRemoveAll;
array presenceUpdate;
array typingStart;
array userUpdate;
array voiceStateUpdate;
array voiceServerUpdate;
array webhooksUpdate;
```
#### Method Signatures

```pike
void create();
```
### GatewayDispatcher
#### Class variables
```pike
WSHandler wsHandler;
Client client;
```
#### Method Signatures

```pike
void create(WSHandler w);
```
```pike
void handleHelloEvent(mapping data);
```
```pike
void handleHBackEvent();
```
```pike
void handleInvalidSessionEvent();
```
```pike
void handleReconnectionRequest();
```
### WSHandler
#### Class variables
```pike
Client client;
WSManager wsManager;
EventDispatcher eventDispatcher;
GatewayDispatcher gatewayDispatcher;
int sequence;
```
#### Method Signatures

```pike
void create(WSManager w);
```
```pike
void handle(mapping a);
```
### WSManager
#### Class variables
```pike
// Public
Client client;
string wsSessionID;
int heartbeat_interval;
int perv_heartbeat_ack;
int sequence;
WSHandler wsHandler;
Protocols.WebSocket.Connection|Val.Null ws;
mapping payload;
// Private
protected int curr_heartbeat_time;
protected bool resuming;
protected bool reconnecting;
```
#### Method Signatures

```pike
void create(Client c);
```
```pike
void start(bool reconnect, bool resume);
```
```pike
void onopen();
```
```pike
void heartbeat(int ms);
```
### Activity
#### Class variables
```pike
string name;
string url;
ActivityTimestamps timestamps;
string applicationId;
string|Val.Null details;
string|Val.Null state;
ActivityParty|Val.Null party;
ActivityAssets|Val.Null assets;
ActivitySecrets|Val.Null secrets;
bool instance;
int flags;
```
#### Method Signatures

```pike
void create(mapping data);
```
### ActivityAssets
#### Class variables
```pike
string largeImage;
string largeText;
string smallImage;
string smallText;
```
#### Method Signatures

```pike
void create(mapping data);
```
### ActivityParty
#### Class variables
```pike
string id;
array size;
```
#### Method Signatures

```pike
void create(mapping data);
```
### ActivitySecrets
#### Class variables
```pike
string join;
string spectate;
string match;
```
#### Method Signatures

```pike
void create(mapping data);
```
### ActivityTimestamps
#### Class variables
```pike
int start;
int end;
```
#### Method Signatures

```pike
void create(mapping data);
```
### Attachment
#### Class variables
```pike
// Public
string id;
string filename;
int size;
string url;
string proxyUrl;
int|Val.Null height;
int|Val.Null width;
// Private
protected Client client;
```
#### Method Signatures

```pike
void create(Client c, mapping data);
```
### Channel
#### Class variables
```pike
string id;
int type;
```
#### Method Signatures

```pike
void create(mapping data);
```
### ChannelCategory
#### Class variables
```pike
```
#### Method Signatures

```pike
void create(Client c, mapping data, void|Guild g);
```
### ChannelDM
#### Class variables
```pike
string lastMessageId;
int type;
string id;
Gallon recipients;
Gallon messages;
```
#### Method Signatures

```pike
void create(Client c, mapping data);
```
### ChannelVoice
#### Class variables
```pike
bool nsfw;
int userLimit;
int bitrate;
```
#### Method Signatures

```pike
void create(Client c, mapping data, void|Guild g);
```
### ClientUser
#### Class variables
```pike
// Public
string avatar;
string discriminator;
string id;
string username;
bool verified;
bool bot;
bool mfaEnabled;
mapping presence;
// Private
protected Client client;
```
#### Method Signatures

```pike
void create(Client c, mapping data);
```
```pike
string whenCreated();
```
```pike
void newPresence(mapping options);
```
### Emoji
#### Class variables
```pike
// Public
string name;
Gallon roles;
Guild guild;
bool|Val.Null requireColons;
string|Val.Null id;
User|Val.Null user;
bool|Val.Null managed;
bool|Val.Null animated;
// Private
protected Client client;
```
#### Method Signatures

```pike
void create(Client c, Guild g, mapping data);
```
### Guild
#### Class variables
```pike
// Public
string id;
string name;
string ownerId;
string region;
string widgetChannelId;
string joinedAt;
string|Val.Null icon;
string|Val.Null splash;
string|Val.Null afkChannelId;
string|Val.Null embedChannelId;
string|Val.Null applicationId;
string|Val.Null systemChannelId;
string|Val.Null banner;
string|Val.Null description;
string|Val.Null vanityUrlCode;
int|Val.Null maxPresences;
bool embedEnabled;
bool owner;
bool widgetEnabled;
bool large;
bool unavailable;
int permissions;
int afkTimeout;
int verificationLevel;
int defaultMessageNotifications;
int mfaLevel;
int explicitContentFilter;
int memberCount;
int maxMembers;
Gallon roles;
Gallon emojis;
Gallon voiceStates;
Gallon members;
Gallon channels;
Gallon presences;
// Private
protected Client client;
```
#### Method Signatures

```pike
void create(Client c, mapping data);
```
### GuildIntegration
#### Class variables
```pike
string id;
string name;
string type;
bool enabled;
bool syncing;
string roleId;
Role role;
int expireBehavior;
int expireGracePeriod;
User user;
mapping account;
string syncedAt;
```
#### Method Signatures

```pike
void create(Client client, mapping data);
```
### GuildMember
#### Class variables
```pike
// Public
User user;
string|Val.Null nickname;
Gallon roles;
string joinedAt;
bool deafend;
bool muted;
Presence presence;
Guild guild;
// Private
protected Client client;
```
#### Method Signatures

```pike
void create(Client c, Guild g, mapping data);
```
### GuildTextChannel
#### Class variables
```pike
// Public
string topic;
string lastMessageId;
Gallon messages;
// Private
protected Client client;
```
#### Method Signatures

```pike
void create(Client c, mapping data, void|Guild g);
```
### Invite
#### Class variables
```pike
string code;
Guild|Val.Null guild;
mixed channel;
User|Val.Null targetUser;
int|Val.Null targetUserType;
int|Val.Null approximatePresenceCount;
int|Val.Null approximateMemberCount;
User inviter;
int uses;
int maxUses;
int maxAge;
bool temporary;
string createdAt;
bool revoked;
```
#### Method Signatures

```pike
void create(Client client, mapping data);
```
### Message
#### Class variables
```pike
string|Val.Null id;
User|Val.Null author;
string|Val.Null content;
string|Val.Null timestamp;
bool|Val.Null tts;
bool|Val.Null mentionEveryone;
Gallon|Val.Null attachments;
array embeds;
Gallon|Val.Null reactions;
GuildMember|Val.Null member;
Guild|Val.Null guild;
string|Val.Null editedTimestamp;
string|Val.Null nonce;
string|Val.Null webhookId;
bool|Val.Null pinned;
int|Val.Null type;
```
#### Method Signatures

```pike
void create(Client client, mapping data);
```
### Permission
#### Class variables
```pike
// Public
int allow;
int deny;
string type;
string id;
GuildMember|Role|Val.Null overwriteable;
// Private
protected Client client;
```
#### Method Signatures

```pike
void create(Client client, mapping data, Guild|void guild);
```
### Presence
#### Class variables
```pike
Activity|Val.Null game;
string|int status;
```
#### Method Signatures

```pike
void create(mapping data);
```
### Reaction
#### Class variables
```pike
// Public
int count;
bool me;
ReactionEmoji emoji;
User|string user;
Message message;
// Private
protected Client client;
```
#### Method Signatures

```pike
void create(Client c, Message msg, mapping data);
```
### ReactionEmoji
#### Class variables
```pike
// Public
string|Val.Null id;
string name;
bool animated;
Reaction reaction;
// Private
protected Client client;
```
#### Method Signatures

```pike
void create(Client c, Reaction r, mapping data);
```
### RegionVoice
#### Class variables
```pike
// Public
string id;
string name;
bool vip;
bool optimal;
bool deprecated;
bool custom;
Guild guild;
// Private
protected Client client;
```
#### Method Signatures

```pike
void create(Client c, Guild g, mapping data);
```
### Role
#### Class variables
```pike
// Public
string id;
string name;
bool hoist;
bool managed;
bool mentionable;
int color;
int position;
int permissions;
// Private
protected Client client;
protected Guild guild;
```
#### Method Signatures

```pike
void create(Client c, Guild g, mapping data);
```
```pike
bool ownPermission(string|int perm);
```
### User
#### Class variables
```pike
// Public
string id;
string username;
string discriminator;
string locale;
string|Val.Null avatar;
string email;
bool bot;
bool mfa_enabled;
bool verified;
int flags;
int premiumType;
// Private
protected Client client;
```
#### Method Signatures

```pike
void create(Client c, mapping data);
```
```pike
string whenCreated();
```
### Webhook
#### Class variables
```pike
string id;
Guild|Val.Null guild;
mixed channel;
User|Val.Null user;
string|Val.Null name;
string|Val.Null avatar;
string token;
```
#### Method Signatures

```pike
void create(Client client, mapping data);
```
### APIManager
#### Class variables
```pike
// Public
Protocols.HTTP.Session HTTPSession;
int retry_after;
Protocols.HTTP.Query response;
// Private
protected mapping mutexes;
protected Client client;
protected RestUtils restUtils;
```
#### Method Signatures

```pike
void create(Client c);
```
```pike
mapping getHeaders();
```
```pike
bool hasError(mixed|void response);
```
```pike
mixed getChannel(string channelId);
```
```pike
mixed modifyChannel(string id, mapping payload);
```
```pike
mixed deleteChannel(string id);
```
```pike
array(Message)|void getChannelMessages(string id, mapping payload);
```
```pike
Message|void getChannelMessage(string channelId, string msgId);
```
```pike
Message|void createMessage(string channelId, string content, mapping|void additional);
```
```pike
void createReaction(string channelId, string messageId, string|Emoji emoji);
```
```pike
void deleteOwnReaction(string channelId, string messageId, string|Emoji emoji);
```
```pike
void deleteUserReaction(string channelId, string messageId, string userId, string|Emoji emoji);
```
```pike
void deleteAllReactions(string channelId, string messageId);
```
```pike
Message|void editMessage(string channelId, string messageId, mapping payload);
```
```pike
void deleteMessage(string channelId, string messageId);
```
```pike
void bulkDeleteMessages(string channelId, int amount);
```
```pike
void editChannelPermissions(string channelId, string|Role|GuildMember roleOrMember, mapping payload);
```
```pike
void deleteChannelPermission(string channelId, string overwriteId);
```
```pike
array(Invite) getChannelInvites(string channelId);
```
```pike
Invite createChannelInvite(string channelId, mapping|void payload);
```
```pike
void triggerTypingIndicator(string channelId);
```
```pike
array(Message) getPinnedMessages(string channelId);
```
```pike
void addPinnedChannelMessage(string channelId, string messageId);
```
```pike
void deletePinnedChannelMessage(string channelId, string messageId);
```
```pike
array(Emoji) getGuildEmojis(string guildId);
```
```pike
Emoji getGuildEmoji(string guildId, string emojiId);
```
```pike
Emoji createGuildEmoji(string guildId, mapping payload);
```
```pike
Emoji modifyGuildEmoji(string guildId, string emojiId, mapping payload);
```
```pike
void deleteGuildEmoji(string guildId, string emojiId);
```
```pike
Guild createGuild(mapping payload);
```
```pike
Guild getGuild(string guildId);
```
```pike
Guild modifyGuild(string guildId, mapping payload);
```
```pike
void deleteGuild(string guildId);
```
```pike
ChannelVoice|ChannelCategory|GuildTextChannel createGuildChannel(string guildId, mapping payload);
```
```pike
ChannelVoice|ChannelCategory|GuildTextChannel modifyGuildChannelPosition(string guildId, array payload);
```
```pike
GuildMember getGuildMember(string guildId, string userId);
```
```pike
array(GuildMember) getGuildMembers(string guildId);
```
```pike
void modifyGuildMember(string guildId, string userId, mapping payload);
```
```pike
void modifyCurrentUserNick(string guildId, mapping payload);
```
```pike
void addGuildMemberRole(string guildId, string userId, string roleId);
```
```pike
void deleteGuildMemberRole(string guildId, string userId, string roleId);
```
```pike
void removeGuildMember(string guildId, string userId);
```
```pike
array(mapping) getGuildBans(string guildId);
```
```pike
mapping getGuildBan(string guildId, string userId);
```
```pike
void createGuildBan(string guildId, string userId, mapping|void payload);
```
```pike
void removeGuildBan(string guildId, string userId);
```
```pike
array(Role) getGuildRoles(string guildId);
```
```pike
Role getGuildRole(string guildId, string roleId);
```
```pike
void modifyGuildRolePositions(string guildId, array payload);
```
```pike
Role modifyGuildRole(string guildId, string userId, mapping payload);
```
```pike
void deleteGuildRole(string guildId, string userId);
```
```pike
int getGuildPruneCount(string guildId, int|string days);
```
```pike
int beginGuildPrune(string guildId, mapping payload);
```
```pike
array(RegionVoice) getGuildVoiceRegions(string guildId);
```
```pike
array(Invite) getGuildInvites(string guildId);
```
```pike
array(GuildIntegration) getGuildIntegrations(string guildId);
```
```pike
GuildIntegration createGuildIntegration(string guildId, mapping payload);
```
```pike
GuildIntegration modifyGuildIntegration(string guildId, string integrationId, mapping payload);
```
```pike
void deleteGuildIntegration(string guildId, string integrationId);
```
```pike
void syncGuildIntegration(string guildId, string integrationId);
```
```pike
mapping getGuildEmbed(string guildId);
```
```pike
mapping modifyGuildEmbed(string guildId, mapping payload);
```
```pike
Invite getGuildVanityURL(string guildId);
```
```pike
mixed getGuildWidgetImage(string guildId, string|void style);
```
```pike
Invite getInvite(string inviteCode);
```
```pike
void deleteInvite(string inviteCode);
```
```pike
User getUser(string userId);
```
```pike
array(User) getCurrentUserGuilds();
```
```pike
void leaveGuild(string guildId);
```
```pike
Webhook createWebhook(string channelId, mapping payload);
```
```pike
array(Webhook) getChannelWebhooks(string channelId);
```
```pike
array(Webhook) getGuildWebhooks(string channelId);
```
```pike
Webhook getWebhook(string webhookId);
```
```pike
Webhook getWebhookWithToken(string webhookId, string token);
```
```pike
Webhook modifyWebhook(string webhookId, mapping payload);
```
```pike
Webhook modifyWebhookWithToken(string webhookId, string token, mapping payload);
```
```pike
void deleteWebhook(string webhookId);
```
```pike
void deleteWebhookWithToken(string webhookId, string webhookToken);
```
```pike
void executeWebhook(string webhookId, string webhookToken, string content, mapping additional);
```
### EmbedConstructor
#### Class variables
```pike
string|Val.Null title;
string|Val.Null type;
string|Val.Null description;
string|Val.Null url;
string|Val.Null timestamp;
int|Val.Null color;
mapping|Val.Null footer;
mapping|Val.Null image;
mapping|Val.Null thumbnail;
mapping|Val.Null video;
mapping|Val.Null provider;
mapping|Val.Null author;
array|Val.Null fields;
```
#### Method Signatures

```pike
void create();
```
```pike
this_program assignTitle(string t);
```
```pike
this_program assignType(string t);
```
```pike
this_program assignDescription(string d);
```
```pike
this_program assignURL(string u);
```
```pike
this_program assignTimestamp(string t);
```
```pike
this_program assignColor(int c);
```
```pike
this_program assignFooter(string text, string|void iconUrl, string|void proxyIconUrl);
```
```pike
this_program assignImage(string|void url, string|void proxyUrl, int|void height, int|void width);
```
```pike
this_program assignVideo(string|void url, int|void height, int|void width);
```
```pike
this_program assignThumbnail(string|void url, string|void proxyUrl, int|void height, int|void width);
```
```pike
this_program assignProvider(string|void name, string|void url);
```
```pike
this_program assignAuthor(string|void name, string|void url, string|void iconUrl, string|void proxyIconUrl);
```
```pike
this_program addField(string name, string value, bool|void isInline);
```
```pike
mapping construct();
```
### EventUtils
#### Class variables
```pike
EventHandlers handlers;
Client eventsClient;
```
#### Method Signatures

```pike
void handle(string event, function handler);
```
### Gallon
#### Class variables
```pike
mapping iterable;
```
#### Method Signatures

```pike
void create(mapping i);
```
```pike
mixed get(string key);
```
```pike
void assign(string key, mixed value);
```
```pike
array arrayOfValues();
```
```pike
array arrayOfKeys();
```
```pike
bool has(string key);
```
```pike
mixed first();
```
```pike
mixed last();
```
```pike
void delete(string key);
```
```pike
void reset();
```
```pike
mixed lookFor(string property, mixed value);
```
### Misc
#### Class variables
```pike
mapping clonedData;
bool first;
bool second;
```
#### Method Signatures

```pike
array mappingDiff(mapping|object a, mapping|object b);
```
```pike
void fixNullables(mixed instance, mixed data);
```
### Permission
#### Class variables
```pike
```
#### Method Signatures

```pike
int own(int permissions, string|int perm);
```
```pike
int add(int permissions, array permsToOverwrite);
```
```pike
int remove(int permissions, array permsToOverwrite);
```
### RestUtils
#### Class variables
```pike
```
#### Method Signatures

```pike
mixed getChannelAccordingToType(int type, mapping data, Client client, void|Guild g);
```
```pike
string constructAttachmentUpload(string file, string name, bool content, string contentStr);
```
```pike
Guild fetchCacheGuild(string guildId, Client client);
```
```pike
mixed fetchCacheChannel(string channelId, Client client);
```
```pike
User fetchCacheUser(string userId, Client client);
```
```pike
Emoji fetchCacheEmoji(string emojiId, Client client, Guild|void guild);
```
```pike
Role fetchCacheRole(string roleId, Client client, Guild|void guild);
```
```pike
GuildMember fetchCacheGuildMember(string memberId, Client client, Guild|void guild);
```
### Snowflake
#### Class variables
```pike
```
#### Method Signatures

```pike
mapping extractData(string id);
```