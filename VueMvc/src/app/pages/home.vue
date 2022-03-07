<template>
    <div id="home">
        <div class="text-center">
            <h1 class="display-4">Welcome</h1>
            <p>Learn about <a href="https://docs.microsoft.com/aspnet/core">building Web apps with ASP.NET Core</a>.</p>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue';

    export default {
        data() {
            return {
                loading: false,
                employee: null,
            };
        },
        components: {},
        mounted: function () {
            //this.getEmployee();
        },
        methods: {
            //getEmployee() {
            //    this.loading = true;
            //    employeeService.getEmployee().then(
            //        (result) => {
            //            this.loading = false;;
            //            console.log(result.data);
            //            this.employee = result.data;
            //        },
            //        (err) => {
            //            this.loading = false;;
            //            console.log(err);
            //        }
            //    );
            //}
        }
    };
</script>

<style>

</style>