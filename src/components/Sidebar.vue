<template>
    <VNavigationDrawer expand-on-hover rail>
        <v-list>
            <v-list-item prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
                subtitle="sandra_a88@gmailcom" title="Sandra Adams" height="70px" 
                >
            </v-list-item>
        </v-list>

        <VDivider />

        <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-arrow-up-bold-box-outline" title="Download" value="download" color="orange-darken-2"></v-list-item>
            <v-list-item prepend-icon="mdi-account-multiple" title="Shared with me" value="shared"></v-list-item>
            <v-list-item prepend-icon="mdi-star" title="Starred" value="starred"></v-list-item>
        </v-list>
    </VNavigationDrawer>

</template>